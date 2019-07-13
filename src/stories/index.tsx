import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditPopup } from "../components/Popup/Storybook/CreditPopup";
import { ErrorPopup } from "../components/Popup/Storybook/ErrorPopup";
import { RegistrationPopup } from "../components/Popup/Storybook/RegistrationPopup";
import { CancelReservationPopup } from "../components/Popup/Storybook/CancelReservationPopup";
import { Header } from "../components/Header";
import { Schedule } from "../components/Schedule";
import { HomePage } from "../components/HomePage";
import { ArticlePage } from "../components/ArticlePage";
import { ThumbnailTherapy } from "../components/Thumbnail/ThumbnailTherapy";
import { ThumbnailArticleNewest } from "../components/Thumbnail/ThumbnailArticleNewest";
import icon from "../static/svg/homer.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Footer } from "../components/Footer";
import { ScheduleFilter } from "../components/ScheduleFilter/ScheduleFilter";
import { ArticlesCollectionPage } from "../components/ArticlesCollectionPage";
import { ProgressBar } from "../components/Schedule/ProgressBar";
import { ChatInfo } from "../components/ChatInfo";
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

storiesOf("Thumbnail", module)
  .add("Therapy", () => (
    <ThumbnailTherapy
      to="/"
      alt="super"
      icon={icon}
      name="MAMA CHAT"
      description="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]"
    />
  ))
  .add("Article", () => (
    <ThumbnailArticleNewest
      to="/"
      date="99.99.9999"
      alt="super"
      icon={icon}
      name="Nazov článku resp. novinky"
      description='A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of […]'
    />
  ));

storiesOf("HomePage", module).add("HomePage", () => <HomePage />);

storiesOf("ArticlePage", module).add("ArticlePage", () => <ArticlePage />);

storiesOf("ScheduleFilter", module).add("ScheduleFilter", () => (
  <ScheduleFilter />
));

storiesOf("ArticlesCollectionPage", module).add(
  "ArticlesCollectionPage",
  () => <ArticlesCollectionPage />
);

storiesOf("ProgressBar", module)
  .add("ProgressBar", () => <ProgressBar actual={1} max={6} />)
  .add("ProgressBar empty", () => <ProgressBar actual={0} max={6} />)
  .add("ProgressBar half", () => <ProgressBar actual={3} max={6} />)
  .add("ProgressBar full", () => <ProgressBar actual={6} max={6} />);

storiesOf("ChatInfo", module).add("ChatInfo", () => (
  <div className="bg-blue">
    <ChatInfo />
  </div>
));
