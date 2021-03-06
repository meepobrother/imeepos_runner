import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { NumInput } from './num-input/num-input';

import { We7ImgDirective } from './we7-img/we7-img';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppService } from './app.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxQRCodeComponent } from './qrcode/qrcode';
import { DialogComponent } from './dialog/dialog';
import { EmptyComponent } from './empty/empty';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    imports: [
        SwiperModule,
        InfiniteScrollModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        SwiperModule,
        InfiniteScrollModule,
        FooterComponent,
        We7ImgDirective,
        ReactiveFormsModule,
        FormsModule,
        NumInput,
        NgxQRCodeComponent,
        DialogComponent,
        EmptyComponent
    ],
    declarations: [
        FooterComponent,
        We7ImgDirective,
        NumInput,
        NgxQRCodeComponent,
        DialogComponent,
        EmptyComponent
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
        AppService
    ]
})
export class SharedModule { }
