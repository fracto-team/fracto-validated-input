export default {
    input: 'dist/src/index.js',
    output: {
        file: 'dist/bundles/fracto-validated-input.js',
        format: 'umd',
        name: 'bundle',
    },
    globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable',
    },
};
