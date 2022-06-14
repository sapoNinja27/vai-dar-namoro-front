import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./link/envio/login.component";
import { MdbCheckboxModule } from "mdb-angular-ui-kit/checkbox";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MdbModalModule } from "mdb-angular-ui-kit/modal";
import { MdbPopoverModule } from "mdb-angular-ui-kit/popover";
import { MdbRadioModule } from "mdb-angular-ui-kit/radio";
import { MdbRangeModule } from "mdb-angular-ui-kit/range";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { MdbScrollspyModule } from "mdb-angular-ui-kit/scrollspy";
import { MdbTabsModule } from "mdb-angular-ui-kit/tabs";
import { MdbTooltipModule } from "mdb-angular-ui-kit/tooltip";
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingPipe } from "./components/loading.pipe";
import { TableEditComponent } from "./components/table-edit/table-edit.component";
import { InputFileComponent } from "./components/input-file/input-file.component";
import { ToastrModule } from "ngx-toastr";
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { CpfMaskPipe } from './components/cpf/cpf-mask.pipe';
import { MatSelectModule } from "@angular/material/select";
import { NgxMaskModule } from "ngx-mask";
import { ConfirmacaoModalComponent } from './components/confirmacao-modal/confirmacao-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingPipe,
    TableEditComponent,
    InputFileComponent,
    SkeletonComponent,
    CpfMaskPipe,
    ConfirmacaoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),
    MatSelectModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
