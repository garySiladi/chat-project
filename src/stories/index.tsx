import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditPopup } from "../components/Popup/Storybook/CreditPopup";
import { ErrorPopup } from "../components/Popup/Storybook/ErrorPopup";
import { RegistrationPopup } from "../components/Popup/Storybook/RegistrationPopup";
import { CancelReservationPopup } from "../components/Popup/Storybook/CancelReservationPopup";
import { Header } from "../components/Header";
import { Schedule } from "../components/Schedule";
import { Home } from "../components/Home";
import { ArticleContainer } from "../components/ArticlePage/ArticleContainer";
import icon from "../static/svg/homer.svg";
import { Thumbnail } from "../components/Thumbnail/Thumbnail";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Footer } from "../components/Footer/Footer";
import { ScheduleFilter } from "../components/ScheduleFilter/ScheduleFilter";
import { ProgressBar } from "../components/Schedule/ProgressBar";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("Buttons", module)
  .add("Button", () => <Button>Button</Button>)
  .add("Button stretched", () => <Button isStretched>Button</Button>)
  .add("Button inverted", () => <Button isInverted>Button</Button>)
  .add("Button inverted stretched", () => (
    <Button isStretched isInverted>
      Button
    </Button>
  ))
  .add("Button onClick", () => (
    <Button isStretched isInverted onClick={() => alert("Hi")}>
      Button
    </Button>
  ));

storiesOf("Input", module).add("normal", () => (
  <Input name="Email" placeholder="Zadajte Váš email" />
));

storiesOf("Footer", module).add("Footer", () => <Footer />);

storiesOf("Popups", module)
  .add("CreditPopup", () => <CreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("CancelReservation", () => <CancelReservationPopup />)
  .add("ErrorPopup", () => <ErrorPopup />);

storiesOf("Header", module).add("Header", () => <Header />);
storiesOf("Schedule", module).add("Schedule", () => <Schedule />);

storiesOf("ThumbnailTherapy", module).add("Therapy", () => (
  <Thumbnail
    name="MAMA CHAT"
    icon={icon}
    alt="super"
    description="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]"
  />
));

storiesOf("Home", module).add("Home", () => <Home />);

storiesOf("ArticlePage", module).add("ArticlePage", () => <ArticleContainer />);

storiesOf("ScheduleFilter", module).add("ScheduleFilter", () => (
  <ScheduleFilter />
));

storiesOf("ProgressBar", module)
  .add("ProgressBar", () => <ProgressBar actual={1} max={6} />)
  .add("ProgressBar empty", () => <ProgressBar actual={0} max={6} />)
  .add("ProgressBar half", () => <ProgressBar actual={3} max={6} />)
  .add("ProgressBar full", () => <ProgressBar actual={6} max={6} />);
