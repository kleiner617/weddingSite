import React, {
  FunctionComponent,
  useState,
  useReducer,
  useEffect
} from "react";
import styled from "@emotion/styled";
import { Checkbox } from "../checkbox";
import { GuestListType } from "../../Types";
import { Button, Form } from "react-bootstrap";

// import { EnterFirstName } from "../Components/rsvp/enter-first-name";

type Props = {
  guestList: GuestListType[];
  onSave: (details: any) => void;
  isMobile?: boolean;
};

type plusOneState = {
  plusOneGuest: boolean;
  firstName: string;
  lastName: string;
  isAttending: number;
};

const RSVPDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

const ResponseSection = styled("div")`
  display: grid;
  grid-template-columns: 2fr 0.5fr 0.5fr;
  margin: 10px auto;
  font-size: 24px;
`;

const ResponseHeader = styled("div")`
  font-size: 36px;
`;

const DetailsHeader = styled("div")`
  font-size: 24px;
  margin-top: 60px;
`;

const CheckboxSection = styled("div")`
  display: inline-block;
`;

const reducer = (state: any, action: any) => {
  return {
    ...state,
    ...action.payload
  };
};

const PlusOneSection = (
  plusOneState: plusOneState,
  onChange: (value: boolean, details: any) => void,
  onBlur: (delta: { field: string; value: string }) => void
) => {
  const firstNameBlur = (e: any) => {
    onBlur({ field: "firstName", value: e.currentTarget.value || "" });
  };
  const lastNameBlur = (e: any) => {
    onBlur({ field: "lastName", value: e.currentTarget.value || "" });
  };

  return (
    <div>
      <div>
        <DetailsHeader>Will you be bringing a plus one?</DetailsHeader>

        <Checkbox
          name="plusOneCheckbox"
          value={plusOneState.isAttending === 1}
          onChange={onChange}
          label={"yes"}
          isDisabled={false}
        />
        <Checkbox
          name="plusOneCheckbox"
          value={plusOneState.isAttending === 0}
          onChange={onChange}
          label={"no"}
          isDisabled={false}
        />
      </div>
      {plusOneState.isAttending !== -1 && plusOneState.isAttending !== 0 && (
        <div>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name </Form.Label>
              <Form.Control
                type="text"
                value={plusOneState.firstName}
                onChange={firstNameBlur}
                style={{
                  width: "30%",
                  margin: "20px auto"
                }}
              />
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                type="text"
                id="guestLastName"
                onChange={lastNameBlur}
                value={plusOneState.lastName}
                style={{
                  width: "30%",
                  margin: "20px auto"
                }}
              />
            </Form.Group>
            <Form.Group controlId="formLastName"></Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
};

const AdditionalDetailsSection = (
  additionalInfo: string,
  onBlur: (val: string) => void,
  isMobile?: boolean
) => {
  const infoChange = (e: any) => {
    onBlur(e.target.value || "");
  };

  return (
    <Form
      className="additional-details"
      style={{
        width: `${isMobile ? "100%" : "30%"}`
      }}
    >
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label className="additional-details-label">
          Anything else we need to know?
        </Form.Label>
        <Form.Control
          as="textarea"
          value={additionalInfo}
          rows="3"
          onChange={infoChange}
        />
      </Form.Group>
      {/* <input type="text" name="additionalInfo" onBlur={infoBlur}></input> */}
    </Form>
  );
};

export const AttendanceDetails: FunctionComponent<Props> = props => {
  const initialState = {};
  const plusOneInitialState = {
    plusOneGuest: false,
    firstName: "",
    lastName: "",
    isAttending: -1
  };
  const [guestListState, dispatch] = useReducer(reducer, initialState);
  const [plusOneState, plusOneDispatch] = useReducer(
    reducer,
    plusOneInitialState
  );
  const [additionalInformation, setAdditionalInformation] = useState<string>(
    ""
  );
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const { guestList } = props;

  useEffect(() => {
    props.guestList.forEach((guest: GuestListType) => {
      dispatch({
        payload: { [guest.id]: -1 }
      });
    });
    plusOneDispatch({
      payload: {
        plusOneGuest: !!(
          props.guestList.length === 1 && props.guestList[0].allowedPlusOne
        )
      }
    });
  }, []);

  useEffect(() => {
    const allGuestsAreValid = Object.keys(guestListState).every(
      (key: string) => {
        return guestListState[key] !== -1;
      }
    );

    const plusOnesValid = isPlusOneValid();

    setSubmitDisabled(!!allGuestsAreValid && plusOnesValid);
  }, [guestListState, plusOneState]);

  const isPlusOneValid = () => {
    if (!plusOneState.plusOneGuest) {
      return true;
    }
    if (plusOneState.isAttending && plusOneState.isAttending === -1) {
      return false;
    } else if (plusOneState.isAttending === 0) {
      return true;
    } else if (plusOneState.isAttending === 1) {
      if (
        plusOneState.firstName.length > 0 &&
        plusOneState.lastName.length > 0
      ) {
        return true;
      }
      return false;
    }
    return false;
  };

  const submitNames = (values: any) => {
    const savingList = props.guestList.map((guestList: any, index: number) => {
      const plusOneDetails = plusOneState.plusOneGuest
        ? { plusOne: plusOneState }
        : {};
      return {
        name: guestList.firstName + " " + guestList.lastName,
        id: guestList.id,
        willBeAttending: guestListState[guestList.id] === 1,
        additionalInformation: additionalInformation,
        ...plusOneDetails
      };
    });
    props.onSave(savingList);
  };

  const onCheckboxChange = (
    value: boolean,
    details: { checkboxID: string; checkboxName: string }
  ) => {
    if (!value) {
      dispatch({
        payload: { [details.checkboxID]: -1 }
      });
    } else if (value && details.checkboxName === "yes") {
      dispatch({
        payload: { [details.checkboxID]: 1 }
      });
    } else if (value && details.checkboxName === "no") {
      dispatch({
        payload: { [details.checkboxID]: 0 }
      });
    }
  };
  const onPlusOneCheckboxChange = (
    value: boolean,
    details: { checkboxID: string; checkboxName: string }
  ) => {
    if (!value) {
      plusOneDispatch({
        payload: { isAttending: -1 }
      });
    } else if (value && details.checkboxName === "yes") {
      plusOneDispatch({
        payload: { isAttending: 1 }
      });
    } else if (value && details.checkboxName === "no") {
      plusOneDispatch({
        payload: { isAttending: 0 }
      });
    }
  };

  const onPlusOneNameBlur = (delta: { field: string; value: string }) => {
    plusOneDispatch({
      payload: { [delta.field]: delta.value }
    });
  };

  const onAdditionalInformationBlur = (info: string) => {
    setAdditionalInformation(info);
  };

  return (
    <RSVPDetails id="rsvp">
      <ResponseHeader> Will you be attending?</ResponseHeader>
      {guestList.map((guest: any) => {
        return (
          <ResponseSection
            style={{
              width: `${props.isMobile ? "100%" : "50%"}`,
              textAlign: "left"
            }}
          >
            <div style={{ alignSelf: "center" }}>
              {guest.firstName} {guest.lastName}
            </div>
            <Checkbox
              name={`${guest.id}`}
              value={guestListState[`${guest.id}`] === 1}
              onChange={onCheckboxChange}
              label={"yes"}
              isDisabled={false}
              id="guest-map-checkbox"
            />
            <Checkbox
              name={`${guest.id}`}
              value={guestListState[`${guest.id}`] === 0}
              onChange={onCheckboxChange}
              label={"no"}
              isDisabled={false}
              id="guest-map-checkbox"
            />
          </ResponseSection>
        );
      })}
      {/* TODO: ERK, if you have time, shouldn't be able to RSVP for a plus one if your response is no. */}
      {!!plusOneState.plusOneGuest &&
        PlusOneSection(
          plusOneState,
          onPlusOneCheckboxChange,
          onPlusOneNameBlur
        )}

      {AdditionalDetailsSection(
        additionalInformation,
        onAdditionalInformationBlur,
        props.isMobile
      )}

      <Button
        variant="outline-primary"
        type="button"
        disabled={!submitDisabled}
        style={{
          width: "100px",
          fontSize: "24px",
          float: "right",
          marginTop: "100px"
        }}
        onClick={submitNames}
      >
        Submit
      </Button>
    </RSVPDetails>
  );
};

export default AttendanceDetails;
