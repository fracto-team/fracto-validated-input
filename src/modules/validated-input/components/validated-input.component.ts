import {Component, ContentChild, Input, OnDestroy} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {InputComponent} from './input/input.component';
import {LabelComponent} from './label/label.component';
import {HelperComponent} from './helper/helper.component';
import {VALIDATION_MESSAGES, ValidationMessages} from '../models/validation-messages';
import {format} from '../../../format_string';

@Component({
    selector: 'validated',
    templateUrl: './validated-input.component.html',
    styleUrls: ['./validated-input.component.scss'],
})
export class ValidatedInputComponent implements OnDestroy {
    @ContentChild(InputComponent, {static: false}) inputRef: InputComponent;
    @ContentChild(LabelComponent, {static: false}) labelRef: LabelComponent;
    @ContentChild(HelperComponent, {static: false}) helperRef: HelperComponent;
    mFormControl: AbstractControl;
    mMin: number;
    mMax: number;
    errors: string[] = [];
    subscribes: Subscription[] = [];
    mLabel: string;
    @Input() validation_messages: ValidationMessages = VALIDATION_MESSAGES;
    tooltipActive: boolean = false;

    @Input() set min(min: number) {
        this.mMin = min;
    }

    @Input() set max(max: number) {
        this.mMax = max;
    }

    @Input() set control(control: AbstractControl) {
        this.unsubscribe();
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            this.mFormControl = control;
            this.mFormControl.valueChanges.subscribe(() => {
                this.getErrors();
            });
            this.getErrors();
        });
    }

    @Input() set label(label: string) {
        this.mLabel = label;
    }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

    protected unsubscribe() {
        for (const sub of this.subscribes) {
            sub.unsubscribe();
        }
    }

    getErrors() {
        if (this.mFormControl.errors) {
            this.errors = Object.keys(this.mFormControl.errors);
        }
    }

    getErrorMessage(key: any) {
        return format(this.validation_messages[key], this.mLabel, this.mMin, this.mMax);
    }

    trackBy(key: string) {
        return key;
    }

    tooltip(status: boolean) {
        this.tooltipActive = status;
    }

    getType(obj: any) {
        return typeof obj;
    }
}
