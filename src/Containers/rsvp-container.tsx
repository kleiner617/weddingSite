import React, { FunctionComponent, useState, useEffect } from "react";
import firestore from "../Components/firebase/firebase";
import StickyHeader from "../Components/desktop/sticky-header";
import { withRouter } from "react-router-dom";
import MobileNavMenu from "../Components/mobile/mobile-nav-menu";
import MobileUI from "../Components/rsvp/mobile-ui";
import DesktopUI from "../Components/rsvp/desktop-ui";

type Props = {
  history: any;
  isMobile?: boolean;
  saveSucceeded: any;
  userFingerprint: string;
};
type State = {
  firstName: string;
  lastName: string;
  isAttending: boolean | null;
  allowedPlusOne: boolean;
};

type EventType = {
  target: {
    value: string;
    id: string;
  };
};

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  isCheckedYes: boolean;
  isCheckedNo: boolean;
}

export const RSVPContainer: FunctionComponent<Props> = props => {
  const [guestList, setGuestList] = useState<any>([]);
  const [validated, setValidated] = useState<any>(null);
  const [userFingerprint, setUserFingerprint] = useState<string>("");

  useEffect(() => {
    fetch(`http://www.devpowerapi.com/fingerprint`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview"
      })
    })
      .then(res => res.json())
      .then(response => setUserFingerprint(response.fingerprint || ""))
      .catch(error => console.log(error));
  }, []);

  const getPossibleGuests = async (invitationName: string) => {
    const formattedName = invitationName
      .toLowerCase()
      .replace(/ and /g, " ")
      .replace(/the /g, " ")
      .replace(/\./g, "")
      .replace(/\s+/g, " ")
      .trim();

    const searchTermsRef = firestore
      .collection("search-terms")
      .where("matchKeys", "array-contains", formattedName);

    // @ts-ignore
    const guestArray = [];
    const searchTermsArray = await searchTermsRef.get();

    searchTermsArray.forEach(searchTerm => {
      guestArray.push(searchTerm.data());
    });

    if (guestArray.length === 1) {
      // @ts-ignore
      const allGuests = [];

      // @ts-ignore
      const results = await guestArray[0].uids.map(async (uid: number) => {
        const docRef = await firestore.collection("guests").doc(`${uid}`);

        const documentSnapshot = await docRef.get();
        await allGuests.push({ ...documentSnapshot.data(), id: uid });
      });

      Promise.all(results).then(completed => {
        // @ts-ignore
        setGuestList(allGuests);
        setValidated("success");
      });
    } else if (guestArray.length === 0) {
      setValidated("error");
    }
  };

  const onSaveRSVP = (saveDetails: any) => {
    const dateRSVP = new Date();
    saveDetails.map((guest: any, index: number) => {
      firestore
        .collection("responses")
        .add({ ...guest, fingerprint: userFingerprint, date: dateRSVP })
        .then(function(docRef) {
          if (index === saveDetails.length - 1) {
            props.history.push("/");
            props.saveSucceeded();
          }
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Open Sans Condensed', sans-serif"
      }}
    >
      {!props.isMobile && <StickyHeader visibleSection={"rsvp"} />}
      {props.isMobile && <MobileNavMenu />}

      {!props.isMobile && (
        <DesktopUI
          isValidName={validated}
          guestList={guestList}
          getPossibleGuests={getPossibleGuests}
          onSaveRSVP={onSaveRSVP}
        />
      )}

      {props.isMobile && (
        <MobileUI
          isValidName={validated}
          guestList={guestList}
          getPossibleGuests={getPossibleGuests}
          onSaveRSVP={onSaveRSVP}
        />
      )}
    </div>
  );
};

export default withRouter(RSVPContainer);
