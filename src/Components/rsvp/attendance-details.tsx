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
};

type plusOneState = {
  plusOneGuest: boolean;
  firstName: string;
  lastName: string;
  isAttending: number;
};

const RSVPDetails = styled("div")``;

const ResponseSection = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 10px auto;
  font-size: 24px;
  padding-left: 40px;
`;

const ResponseHeader = styled("div")`
  font-size: 36px;
`;

const DetailsHeader = styled("div")`
  font-size: 24px;
  margin-top: 60px;
`;

const PlusOneGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  width: 50%;
  margin: auto;
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
          id={"plusone-yes"}
        />
        <Checkbox
          name="plusOneCheckbox"
          value={plusOneState.isAttending === 0}
          onChange={onChange}
          label={"no"}
          isDisabled={false}
          id="plusone-no"
        />
      </div>
      {plusOneState.isAttending !== -1 && plusOneState.isAttending !== 0 && (
        <div>
          <Form>
            <PlusOneGrid>
              <Form.Group controlId="formFirstName">
                <div>First Name </div>
                <Form.Control
                  type="text"
                  value={plusOneState.firstName}
                  onChange={firstNameBlur}
                  style={{
                    margin: "20px 10px"
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <div>Last Name </div>
                <Form.Control
                  type="text"
                  id="guestLastName"
                  onChange={lastNameBlur}
                  value={plusOneState.lastName}
                  style={{
                    margin: "20px auto"
                  }}
                />
              </Form.Group>
            </PlusOneGrid>
          </Form>{" "}
        </div>
      )}
    </div>
  );
};

const AdditionalDetailsSection = (
  additionalInfo: string,
  onBlur: (val: string) => void
) => {
  const infoChange = (e: any) => {
    onBlur(e.target.value || "");
  };

  return (
    <Form
      className="additional-details"
      style={{
        width: "50%"
      }}
    >
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label className="additional-details-label">
          Anything else we need to know?
        </Form.Label>
        <Form.Control
          style={{ fontSize: "24px" }}
          as="textarea"
          value={additionalInfo}
          rows="3"
          onChange={infoChange}
          placeholder="Let us know about any special requests, food allergies, etc.."
        />
      </Form.Group>
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
              width: "50%",
              textAlign: "left"
            }}
            id={guest.id}
          >
            <div style={{ alignSelf: "center" }} id={guest.id}>
              {guest.firstName} {guest.lastName}
            </div>
            <div id={guest.id}>
              <Checkbox
                name={`${guest.id}`}
                value={guestListState[`${guest.id}`] === 1}
                onChange={onCheckboxChange}
                label={"yes"}
                isDisabled={false}
                id={`yes-${guest.id}`}
              />
              <Checkbox
                name={`${guest.id}`}
                value={guestListState[`${guest.id}`] === 0}
                onChange={onCheckboxChange}
                label={"no"}
                isDisabled={false}
                id={`no-${guest.id}`}
              />
            </div>
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
        onAdditionalInformationBlur
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
