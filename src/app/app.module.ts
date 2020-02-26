import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  ButtonModule,
  AccordionModule,
  InputModule,
  FileUploaderModule
} from "carbon-components-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, AccordionModule, InputModule, FileUploaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
