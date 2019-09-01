"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrimeModel = /** @class */ (function () {
    function PrimeModel() {
        this.total = 0;
        this.primeArr = [];
        this.el = "  <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\"></button>";
        this.getInput();
        this.getPrimeNumbers();
        this.clean();
    }
    PrimeModel.prototype.getPrimeNumbers = function () {
        for (var i = 2; i <= this.total; i++) {
            var isNotPrime = false;
            for (var j = 2; j <= (i - 1); j++) {
                if (i % j === 0) {
                    isNotPrime = true;
                    break;
                }
            }
            if (isNotPrime == false) {
                this.primeArr.push(i);
            }
        }
    };
    ;
    PrimeModel.prototype.clean = function () {
        $("#primeClean").on('click', function () {
            $('#prime-container').empty();
        });
    };
    PrimeModel.prototype.getInput = function () {
        var _this = this;
        var _that = this;
        $("#primeBtn").on('click', function () {
            console.log(1);
            $('#prime-container').empty();
            console.log(2);
            var num = $('#primeBtnInput').val();
            _this.total = parseInt(num);
            _that.getPrimeNumbers();
            _that.createContainer();
        });
    };
    ;
    PrimeModel.prototype.createContainer = function () {
        var _this = this;
        var $container = $('#prime-container');
        // $('#prime-container').children().remove();
        // $('#prime-container').children().remove();
        this.primeArr.map(function (item) {
            $(_this.el).clone().appendTo($container).text(item);
        });
    };
    ;
    return PrimeModel;
}());
exports.PrimeModel = PrimeModel;
