import { FormControl } from "@angular/forms";

export class DatePublishedValidator extends FormControl {
  override setValue(value: string, options: any): void {
    if (value.match(/[^0-9|/-]/gi)) {
        super.setValue(this.value, {...options, emitModelToViewChange: true})
        return;
    }
    if(value.length == 5 && this.value.length == 6) {
        super.setValue(value.slice(0, 5), {...options, emitModelToViewChange: true})
        return;
    }
    if (value.length === 2 && this.value.length === 3) {
        super.setValue(value, {...options, emitModelToViewChange: true})
        return;
    }
    if (value.length === 2 || value.length === 5) {
        super.setValue(value + '/', {...options, emitModelToViewChange: true})
        return;
    }
    if (value.length === 3) {
        super.setValue(value.slice(0, 2), {...options, emitModelToViewChange: true})
        return;
    }
    if(this.value.length === 5) {
        super.setValue(value + '/', {...options, emitModelToViewChange: true})
    }
    if (value.length > 10) {
        super.setValue(this.value, {...options, emitModelToViewChange: true})
        return;
    }
    super.setValue(value, {...options, emitModelToViewChange: true})
}

}
