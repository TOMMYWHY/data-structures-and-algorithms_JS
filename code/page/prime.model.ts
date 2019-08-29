
export class PrimeModel {
    private total: number = 0;
    private primeArr: number[] = [];
    private el: any = `  <button type="button" class="btn btn-outline-secondary btn-sm"></button>`
    constructor() {
        this.getInput();
        this.getPrimeNumbers();
        this.clean();

    }
    getPrimeNumbers() {
        for (let i = 2; i <= this.total; i++) {
            let isNotPrime: boolean = false;
            for (let j = 2; j <= (i - 1); j++) {
                if (i % j === 0) {
                    isNotPrime = true
                    break;
                }
            }
            if (isNotPrime == false) {
                this.primeArr.push(i);
            }
        }
    };
    clean(){ $("#primeClean").on('click', () => {
        $('#prime-container').empty();
    })}
    getInput() {
        let _that = this;
        $("#primeBtn").on('click', () => {
            let num: any = $('#primeBtnInput').val()
            this.total = parseInt(num);
            _that.getPrimeNumbers();
            _that.createContainer();

        })
    };
    createContainer() {
        let $container = $('#prime-container');
        $('#prime-container').children().remove();
        this.primeArr.map(item => {
            $(this.el).clone().appendTo($container).text(item);
        })

    };

}

