<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterDigamma

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which evaluates the [digamma function][@stdlib/math/base/special/digamma] for each iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-special-digamma
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var iterDigamma = require( '@stdlib/math-iter-special-digamma' );
```

#### iterDigamma( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively evaluates the [digamma function][@stdlib/math/base/special/digamma].

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterDigamma( array2iterator( [ -2.5, 1.0 ] ) );
// returns <Object>

var v = it.next().value;
// returns ~1.103

v = it.next().value;
// returns ~-0.577

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-iter-uniform' );
var iterDigamma = require( '@stdlib/math-iter-special-digamma' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = uniform( 0.01, 5.0, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterDigamma( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/digamma`][@stdlib/math/base/special/digamma]</span><span class="delimiter">: </span><span class="description">digamma function.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/gamma`][@stdlib/math/iter/special/gamma]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the gamma function for each iterated value.</span>
-   <span class="package-name">[`@stdlib/math/iter/special/trigamma`][@stdlib/math/iter/special/trigamma]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the trigamma function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-special-digamma.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-special-digamma

[test-image]: https://github.com/stdlib-js/math-iter-special-digamma/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-special-digamma/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-special-digamma/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-special-digamma?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-special-digamma.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-special-digamma/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-special-digamma/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-special-digamma/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-special-digamma/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-special-digamma/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/digamma]: https://github.com/stdlib-js/math-base-special-digamma

[@stdlib/math/iter/special/gamma]: https://github.com/stdlib-js/math-iter-special-gamma

[@stdlib/math/iter/special/trigamma]: https://github.com/stdlib-js/math-iter-special-trigamma

<!-- </related-links> -->

</section>

<!-- /.links -->
