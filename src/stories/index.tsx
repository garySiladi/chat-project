import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditPopup } from "../components/Popup/Storybook/CreditPopup";
import { ErrorPopup } from "../components/Popup/Storybook/ErrorPopup";
import { RegistrationPopup } from "../components/Popup/Storybook/RegistrationPopup";
import { CancelReservationPopup } from "../components/Popup/Storybook/CancelReservationPopup";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { ArticleContainer } from "../components/ArticlePage/ArticleContainer";
import { ThumbnailTherapy } from "../components/Thumbnail/ThumbnailTherapy";
import { ThumbnailArticle } from "../components/Thumbnail/ThumbnailArticle";
import icon from "../static/svg/homer.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Footer } from "../components/Footer/Footer";
import { ScheduleFilter } from "../components/ScheduleFilter/ScheduleFilter";
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

storiesOf("Thumbnail", module)
  .add("Therapy", () => (
    <ThumbnailTherapy
      alt="super"
      icon={icon}
      name="MAMA CHAT"
      description="Senzorické hry pre deti do 3 rokov sú skveloou príležitosťou nechať svoje [...]"
      button="Zistiť viac"
    />
  ))
  .add("Article", () => (
    <ThumbnailArticle
      date="99.99.9999"
      alt="super"
      icon={icon}
      name="Nazov článku resp. novinky"
      description='A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of […]'
      button="Zobraziť článok"
    />
  ));

storiesOf("Home", module).add("Home", () => <Home />);

storiesOf("ArticlePage", module).add("ArticlePage", () => <ArticleContainer />);

storiesOf("ScheduleFilter", module).add("ScheduleFilter", () => (
  <ScheduleFilter />
));
