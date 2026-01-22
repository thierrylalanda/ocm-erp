import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/base-ui/typography/typography.component.ts
var TypographyComponent = class _TypographyComponent {
  static \u0275fac = function TypographyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TypographyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypographyComponent, selectors: [["app-typography"]], decls: 382, vars: 0, consts: [[1, ""], [1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "mb-3"], [1, "mb-0"], [1, "h1", "mb-3"], [1, "h2", "mb-3"], [1, "h3", "mb-3"], [1, "h4", "mb-3"], [1, "h5", "mb-3"], [1, "h6", "mb-0"], [1, "col-12"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "display-5"], [1, "display-6"], [1, "text-muted"], [1, "lead"], ["title", "attribute"], [1, "blockquote"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "col-xl-4"], [1, "list-unstyled"], [1, "text-muted", "m-b-15"], [1, "list-inline"], [1, "list-inline-item"], [1, "card", "card-h-100"], ["title", "HyperText Markup Language", 1, "initialism"], [1, "text-center"], ["title", "PacesText Markup Language"], [1, "blockquote", "text-center"], [1, "blockquote-footer", "text-center"], [1, "blockquote", "text-end"], [1, "blockquote-footer", "text-end"], [1, "row", "mb-0"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "text-truncate"], [1, "col-sm-4"], [1, "col-sm-8"]], template: function TypographyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Typography");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "ol", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "li", 6)(11, "a", 7);
      \u0275\u0275text(12, "Base UI");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 8);
      \u0275\u0275text(14, "Typography");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h5", 13);
      \u0275\u0275text(20, "Headings Tags");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 14)(22, "p");
      \u0275\u0275text(23, "All HTML headings, ");
      \u0275\u0275domElementStart(24, "code");
      \u0275\u0275text(25, "<h1>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(26, " through ");
      \u0275\u0275domElementStart(27, "code");
      \u0275\u0275text(28, "<h6>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(29, ", are available.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "h1", 15);
      \u0275\u0275text(31, "h1. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "h2", 15);
      \u0275\u0275text(33, "h2. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "h3", 15);
      \u0275\u0275text(35, "h3. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "h4", 15);
      \u0275\u0275text(37, "h4. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "h5", 15);
      \u0275\u0275text(39, "h5. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "h6", 16);
      \u0275\u0275text(41, "h6. Bootstrap heading");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(42, "div", 10)(43, "div", 11)(44, "div", 12)(45, "h5", 13);
      \u0275\u0275text(46, "Heading Class Names");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(47, "div", 14)(48, "p")(49, "code");
      \u0275\u0275text(50, ".h1");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(51, " through ");
      \u0275\u0275domElementStart(52, "code");
      \u0275\u0275text(53, ".h6");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(54, " classes are also available.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "p", 17);
      \u0275\u0275text(56, "h1. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "p", 18);
      \u0275\u0275text(58, "h2. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "p", 19);
      \u0275\u0275text(60, "h3. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "p", 20);
      \u0275\u0275text(62, "h4. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "p", 21);
      \u0275\u0275text(64, "h5. Bootstrap heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "p", 22);
      \u0275\u0275text(66, "h6. Bootstrap heading");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(67, "div", 9)(68, "div", 23)(69, "div", 11)(70, "div", 12)(71, "h5", 13);
      \u0275\u0275text(72, "Display Headings");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(73, "div", 14)(74, "p");
      \u0275\u0275text(75, "Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading\u2014a larger, slightly more opinionated heading style.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "h1", 24);
      \u0275\u0275text(77, "Display 1");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(78, "h1", 25);
      \u0275\u0275text(79, "Display 2");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(80, "h1", 26);
      \u0275\u0275text(81, "Display 3");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(82, "h1", 27);
      \u0275\u0275text(83, "Display 4");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "h1", 28);
      \u0275\u0275text(85, "Display 5");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "h1", 29);
      \u0275\u0275text(87, "Display 6");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(88, "div", 9)(89, "div", 23)(90, "div", 11)(91, "div", 12)(92, "h5", 13);
      \u0275\u0275text(93, "Inline Text Elements");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(94, "div", 14)(95, "p", 30);
      \u0275\u0275text(96, "Styling for common inline HTML5 elements.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "p", 31);
      \u0275\u0275text(98, "Your title goes here");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(99, "p");
      \u0275\u0275text(100, "You can use the mark tag to ");
      \u0275\u0275domElementStart(101, "mark");
      \u0275\u0275text(102, "highlight");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(103, " text.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(104, "p")(105, "del");
      \u0275\u0275text(106, "This line of text is meant to be treated as deleted text.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(107, "p")(108, "s");
      \u0275\u0275text(109, "This line of text is meant to be treated as no longer accurate.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(110, "p")(111, "ins");
      \u0275\u0275text(112, "This line of text is meant to be treated as an addition to the document.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(113, "p")(114, "u");
      \u0275\u0275text(115, "This line of text will render as underlined");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(116, "p")(117, "small");
      \u0275\u0275text(118, "This line of text is meant to be treated as fine print.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(119, "p")(120, "strong");
      \u0275\u0275text(121, "This line rendered as bold text.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(122, "p")(123, "em");
      \u0275\u0275text(124, "This line rendered as italicized text.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275text(125, " Nulla ");
      \u0275\u0275domElementStart(126, "abbr", 32);
      \u0275\u0275text(127, "attr");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(128, " vitae elit libero, a pharetra augue. ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(129, "div", 9)(130, "div", 23)(131, "div", 11)(132, "div", 12)(133, "h5", 13);
      \u0275\u0275text(134, "Naming a Source");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(135, "div", 14)(136, "p", 30);
      \u0275\u0275text(137, "A well-known quote, contained in a blockquote element. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(138, "figure")(139, "blockquote", 33)(140, "p");
      \u0275\u0275text(141, "A well-known quote, contained in a blockquote element.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(142, "figcaption", 34);
      \u0275\u0275text(143, " Someone famous in ");
      \u0275\u0275domElementStart(144, "cite", 35);
      \u0275\u0275text(145, "Source Title");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(146, "div", 9)(147, "div", 36)(148, "div", 11)(149, "div", 12)(150, "h5", 13);
      \u0275\u0275text(151, "Unordered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(152, "div", 14)(153, "p", 30);
      \u0275\u0275text(154, "A list of items in which the order does not explicitly matter.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(155, "ul")(156, "li");
      \u0275\u0275text(157, " Lorem ipsum dolor sit amet ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(158, "li");
      \u0275\u0275text(159, " Consectetur adipiscing elit ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(160, "li");
      \u0275\u0275text(161, " Integer molestie lorem at massa ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(162, "li");
      \u0275\u0275text(163, " Facilisis in pretium nisl aliquet ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(164, "li");
      \u0275\u0275text(165, " Nulla volutpat aliquam velit ");
      \u0275\u0275domElementStart(166, "ul")(167, "li");
      \u0275\u0275text(168, " Phasellus iaculis neque ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(169, "li");
      \u0275\u0275text(170, " Purus sodales ultricies ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(171, "li");
      \u0275\u0275text(172, " Vestibulum laoreet porttitor sem ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(173, "li");
      \u0275\u0275text(174, " Ac tristique libero volutpat at ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(175, "li");
      \u0275\u0275text(176, " Faucibus porta lacus fringilla vel ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(177, "li");
      \u0275\u0275text(178, " Aenean sit amet erat nunc ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "li");
      \u0275\u0275text(180, " Eget porttitor lorem ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(181, "div", 36)(182, "div", 11)(183, "div", 12)(184, "h5", 13);
      \u0275\u0275text(185, "Ordered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(186, "div", 14)(187, "p", 30);
      \u0275\u0275text(188, "A list of items in which the order does explicitly matter.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(189, "ol")(190, "li");
      \u0275\u0275text(191, " Lorem ipsum dolor sit amet ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(192, "li");
      \u0275\u0275text(193, " Consectetur adipiscing elit ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(194, "li");
      \u0275\u0275text(195, " Integer molestie lorem at massa ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(196, "li");
      \u0275\u0275text(197, " Facilisis in pretium nisl aliquet ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(198, "li");
      \u0275\u0275text(199, " Nulla volutpat aliquam velit ");
      \u0275\u0275domElementStart(200, "ol")(201, "li");
      \u0275\u0275text(202, " Phasellus iaculis neque ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(203, "li");
      \u0275\u0275text(204, " Purus sodales ultricies ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(205, "li");
      \u0275\u0275text(206, " Vestibulum laoreet porttitor sem ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(207, "li");
      \u0275\u0275text(208, " Ac tristique libero volutpat at ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(209, "li");
      \u0275\u0275text(210, " Faucibus porta lacus fringilla vel ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(211, "li");
      \u0275\u0275text(212, " Aenean sit amet erat nunc ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(213, "li");
      \u0275\u0275text(214, " Eget porttitor lorem ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(215, "div", 36)(216, "div", 11)(217, "div", 12)(218, "h5", 13);
      \u0275\u0275text(219, "Unstyled");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(220, "div", 14)(221, "p", 30)(222, "strong");
      \u0275\u0275text(223, "This only applies to immediate children list items");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(224, ", meaning you will need to add the class for any nested lists as well.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(225, "ul", 37)(226, "li");
      \u0275\u0275text(227, " Lorem ipsum dolor sit amet ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(228, "li");
      \u0275\u0275text(229, " Integer molestie lorem at massa ");
      \u0275\u0275domElementStart(230, "ul")(231, "li");
      \u0275\u0275text(232, " Phasellus iaculis neque ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(233, "li");
      \u0275\u0275text(234, " Faucibus porta lacus fringilla vel ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(235, "li");
      \u0275\u0275text(236, " Eget porttitor lorem ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(237, "h5");
      \u0275\u0275text(238, "Inline");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(239, "p", 38);
      \u0275\u0275text(240, "Place all list items on a single line with ");
      \u0275\u0275domElementStart(241, "code");
      \u0275\u0275text(242, "display: inline-block;");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(243, " and some light padding. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(244, "ul", 39)(245, "li", 40);
      \u0275\u0275text(246, " Lorem ipsum ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(247, "li", 40);
      \u0275\u0275text(248, " Phasellus iaculis ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(249, "li", 40);
      \u0275\u0275text(250, " Nulla volutpat ");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(251, "div", 9)(252, "div", 36)(253, "div", 41)(254, "div", 12)(255, "h5", 13);
      \u0275\u0275text(256, "Abbreviations");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(257, "div", 14)(258, "p", 30);
      \u0275\u0275text(259, "Add .initialism to an abbreviation for a slightly smaller font-size.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(260, "p")(261, "abbr", 32);
      \u0275\u0275text(262, "attr");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(263, "p")(264, "abbr", 42);
      \u0275\u0275text(265, "HTML");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(266, "div", 36)(267, "div", 41)(268, "div", 12)(269, "h5", 13);
      \u0275\u0275text(270, "Alignment");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(271, "div", 14)(272, "p", 30);
      \u0275\u0275text(273, "Use text utilities as needed to change the alignment of your blockquote.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(274, "figure", 43)(275, "blockquote", 33)(276, "p");
      \u0275\u0275text(277, "A well-known quote, contained in a blockquote element.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(278, "figcaption", 34);
      \u0275\u0275text(279, " Someone famous in ");
      \u0275\u0275domElementStart(280, "cite", 35);
      \u0275\u0275text(281, "Source Title");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(282, "figure", 4)(283, "blockquote", 33)(284, "p");
      \u0275\u0275text(285, "A well-known quote, contained in a blockquote element.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "figcaption", 34);
      \u0275\u0275text(287, " Someone famous in ");
      \u0275\u0275domElementStart(288, "cite", 35);
      \u0275\u0275text(289, "Source Title");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(290, "div", 36)(291, "div", 41)(292, "div", 12)(293, "h5", 13);
      \u0275\u0275text(294, "Inline");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(295, "div", 14)(296, "p", 30);
      \u0275\u0275text(297, "Remove a list's bullets and apply some light margin with a combination of two classes, .list-inline and .list-inline-item.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(298, "ul", 39)(299, "li", 40);
      \u0275\u0275text(300, "This is a list item.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(301, "li", 40);
      \u0275\u0275text(302, "And another one.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(303, "li", 40);
      \u0275\u0275text(304, "But they're displayed inline.");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(305, "div", 9)(306, "div", 10)(307, "div", 41)(308, "div", 12)(309, "h5", 13);
      \u0275\u0275text(310, "Blockquotes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(311, "div", 14)(312, "p", 30);
      \u0275\u0275text(313, "For quoting blocks of content from another source within your document. Wrap ");
      \u0275\u0275domElementStart(314, "code");
      \u0275\u0275text(315, '<blockquote class="blockquote">');
      \u0275\u0275domElementEnd();
      \u0275\u0275text(316, " around any ");
      \u0275\u0275domElementStart(317, "abbr", 44);
      \u0275\u0275text(318, "HTML");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(319, " as the quote.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(320, "blockquote", 33)(321, "p", 16);
      \u0275\u0275text(322, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(323, "figcaption", 34);
      \u0275\u0275text(324, "Someone famous in ");
      \u0275\u0275domElementStart(325, "cite", 35);
      \u0275\u0275text(326, "Source Title");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(327, "p", 38);
      \u0275\u0275text(328, "Use text utilities as needed to change the alignment of your blockquote.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(329, "blockquote", 45)(330, "p", 16);
      \u0275\u0275text(331, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(332, "figcaption", 46);
      \u0275\u0275text(333, "Someone famous in ");
      \u0275\u0275domElementStart(334, "cite", 35);
      \u0275\u0275text(335, "Source Title");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(336, "blockquote", 47)(337, "p", 16);
      \u0275\u0275text(338, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(339, "figcaption", 48);
      \u0275\u0275text(340, "Someone famous in ");
      \u0275\u0275domElementStart(341, "cite", 35);
      \u0275\u0275text(342, "Source Title");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(343, "div", 10)(344, "div", 11)(345, "div", 12)(346, "h5", 13);
      \u0275\u0275text(347, "Description List Alignment");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(348, "div", 14)(349, "p", 30);
      \u0275\u0275text(350, "Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a ");
      \u0275\u0275domElementStart(351, "code");
      \u0275\u0275text(352, ".text-truncate");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(353, " class to truncate the text with an ellipsis.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(354, "dl", 49)(355, "dt", 50);
      \u0275\u0275text(356, "Description lists");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(357, "dd", 51);
      \u0275\u0275text(358, "A description list is perfect for defining terms.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(359, "dt", 50);
      \u0275\u0275text(360, "Euismod");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(361, "dd", 51)(362, "p");
      \u0275\u0275text(363, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(364, "p");
      \u0275\u0275text(365, "Donec id elit non mi porta gravida at eget metus.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(366, "dt", 50);
      \u0275\u0275text(367, "Malesuada porta");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(368, "dd", 51);
      \u0275\u0275text(369, "Etiam porta sem malesuada magna mollis euismod.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(370, "dt", 52);
      \u0275\u0275text(371, "Truncated term is truncated");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(372, "dd", 51);
      \u0275\u0275text(373, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(374, "dt", 50);
      \u0275\u0275text(375, "Nesting");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(376, "dd", 51)(377, "dl", 49)(378, "dt", 53);
      \u0275\u0275text(379, "Nested definition list");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(380, "dd", 54);
      \u0275\u0275text(381, "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypographyComponent, [{
    type: Component,
    args: [{ selector: "app-typography", imports: [CommonModule], template: `			<!-- Start Content -->
      <div class="">

        <!-- Page Header -->
        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div class="flex-grow-1">
                <h4 class="fs-18 fw-semibold mb-0">Typography</h4>
            </div>
            <div class="text-end">
                <ol class="breadcrumb m-0 py-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                    <li class="breadcrumb-item active">Typography</li>
                </ol>
            </div>
        </div>
<!-- End Page Header -->
        
<!-- start row -->
        <div class="row">

            <!-- Headings Tags -->
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Headings Tags</h5>
                    </div>
                    <div class="card-body">
        <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
                        <h1 class="mb-3">h1. Bootstrap heading</h1>
                        <h2 class="mb-3">h2. Bootstrap heading</h2>
                        <h3 class="mb-3">h3. Bootstrap heading</h3>
                        <h4 class="mb-3">h4. Bootstrap heading</h4>
                        <h5 class="mb-3">h5. Bootstrap heading</h5>
                        <h6 class="mb-0">h6. Bootstrap heading</h6>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <!-- /Headings Tags -->

            <!-- Headings Class Names -->
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Heading Class Names</h5>
                    </div>
                    <div class="card-body">
      <p><code>.h1</code> through <code>.h6</code> classes are also available.</p>
                        <p class="h1 mb-3">h1. Bootstrap heading</p>
                        <p class="h2 mb-3">h2. Bootstrap heading</p>
                        <p class="h3 mb-3">h3. Bootstrap heading</p>
                        <p class="h4 mb-3">h4. Bootstrap heading</p>
                        <p class="h5 mb-3">h5. Bootstrap heading</p>
                        <p class="h6 mb-0">h6. Bootstrap heading</p>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
            <!-- /Headings Class Names -->
        </div>
<!-- end row -->

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Display Headings</h5>
                    </div>
                    <div class="card-body">
                        <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading\u2014a larger, slightly more opinionated heading style.</p>

                        <h1 class="display-1">Display 1</h1>

                        <h1 class="display-2">Display 2</h1>

                        <h1 class="display-3">Display 3</h1>

                        <h1 class="display-4">Display 4</h1>

                        <h1 class="display-5">Display 5</h1>

                        <h1 class="display-6">Display 6</h1>

                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Inline Text Elements</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Styling for common inline HTML5 elements.</p>
                        <p class="lead">Your title goes here</p>
                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                        <p><u>This line of text will render as underlined</u></p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p><strong>This line rendered as bold text.</strong></p>
                        <p><em>This line rendered as italicized text.</em></p> Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.

                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

        </div>
        <!-- end row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Naming a Source</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">A well-known quote, contained in a blockquote element. </p>
                        <figure>
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->
        </div> <!-- end row -->


        <div class="row">
            <div class="col-xl-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Unordered</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">A list of items in which the order does not explicitly matter.</p>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                Consectetur adipiscing elit
                            </li>
                            <li>
                                Integer molestie lorem at massa
                            </li>
                            <li>
                                Facilisis in pretium nisl aliquet
                            </li>
                            <li>
                                Nulla volutpat aliquam velit
                                <ul>
                                    <li>
                                        Phasellus iaculis neque
                                    </li>
                                    <li>
                                        Purus sodales ultricies
                                    </li>
                                    <li>
                                        Vestibulum laoreet porttitor sem
                                    </li>
                                    <li>
                                        Ac tristique libero volutpat at
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Faucibus porta lacus fringilla vel
                            </li>
                            <li>
                                Aenean sit amet erat nunc
                            </li>
                            <li>
                                Eget porttitor lorem
                            </li>
                        </ul>

                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

            <div class="col-xl-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Ordered</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">A list of items in which the order does explicitly matter.</p>
                        <ol>
                            <li>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                Consectetur adipiscing elit
                            </li>
                            <li>
                                Integer molestie lorem at massa
                            </li>
                            <li>
                                Facilisis in pretium nisl aliquet
                            </li>
                            <li>
                                Nulla volutpat aliquam velit
                                <ol>
                                    <li>
                                        Phasellus iaculis neque
                                    </li>
                                    <li>
                                        Purus sodales ultricies
                                    </li>
                                    <li>
                                        Vestibulum laoreet porttitor sem
                                    </li>
                                    <li>
                                        Ac tristique libero volutpat at
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Faucibus porta lacus fringilla vel
                            </li>
                            <li>
                                Aenean sit amet erat nunc
                            </li>
                            <li>
                                Eget porttitor lorem
                            </li>
                        </ol>
                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

            <div class="col-xl-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Unstyled</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted"><strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>
                        <ul class="list-unstyled">
                            <li>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                Integer molestie lorem at massa
                                <ul>
                                    <li>
                                        Phasellus iaculis neque
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Faucibus porta lacus fringilla vel
                            </li>
                            <li>
                                Eget porttitor lorem
                            </li>
                        </ul>

                        <h5>Inline</h5>
                        <p class="text-muted m-b-15">Place all list items on a single line with <code>display: inline-block;</code> and some light padding.
                        </p>

                        <ul class="list-inline">
                            <li class="list-inline-item">
                                Lorem ipsum
                            </li>
                            <li class="list-inline-item">
                                Phasellus iaculis
                            </li>
                            <li class="list-inline-item">
                                Nulla volutpat
                            </li>
                        </ul>

                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-xl-4">
                <div class="card card-h-100">
                    <div class="card-header">
                        <h5 class="card-title">Abbreviations</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Add .initialism to an abbreviation for a slightly smaller font-size.</p>
                        <p><abbr title="attribute">attr</abbr></p>
                        <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

            <div class="col-xl-4">
                <div class="card card-h-100">
                    <div class="card-header">
                        <h5 class="card-title">Alignment</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Use text utilities as needed to change the alignment of your
                            blockquote.</p>
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>
                        <figure class="text-end">
                            <blockquote class="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                        </figure>

                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

            <div class="col-xl-4">
                <div class="card card-h-100">
                    <div class="card-header">
                        <h5 class="card-title">Inline</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Remove a list's bullets and apply some light margin with a combination of two classes, .list-inline and .list-inline-item.</p>
                        <ul class="list-inline">
                            <li class="list-inline-item">This is a list item.</li>
                            <li class="list-inline-item">And another one.</li>
                            <li class="list-inline-item">But they're displayed inline.</li>
                        </ul>
                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

        </div>
        <!-- end row -->


        <div class="row">
            <div class="col-xl-6">
                <div class="card card-h-100">
                    <div class="card-header">
                        <h5 class="card-title">Blockquotes</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class="blockquote"&gt;</code> around any <abbr title="PacesText Markup Language">HTML</abbr> as the quote.</p>
                        <blockquote class="blockquote">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
                        <p class="text-muted m-b-15">Use text utilities as needed to change the alignment of your blockquote.</p>
                        <blockquote class="blockquote text-center">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer text-center">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
                        <blockquote class="blockquote text-end">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                        <figcaption class="blockquote-footer text-end">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Description List Alignment</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to truncate the text with an ellipsis.</p>
                        <dl class="row mb-0">
                            <dt class="col-sm-3">Description lists</dt>
                            <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                            <dt class="col-sm-3">Euismod</dt>
                            <dd class="col-sm-9">
                                <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                <p>Donec id elit non mi porta gravida at eget metus.</p>
                            </dd>
                            <dt class="col-sm-3">Malesuada porta</dt>
                            <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                            <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
                            <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                            <dt class="col-sm-3">Nesting</dt>
                            <dd class="col-sm-9">
                                <dl class="row mb-0">
                                    <dt class="col-sm-4">Nested definition list</dt>
                                    <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                </dl>
                            </dd>
                        </dl>

                    </div> <!-- end card body -->
                </div> <!-- end card -->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

    </div> 
<!-- End Content -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypographyComponent, { className: "TypographyComponent", filePath: "src/app/features/ui-interface/base-ui/typography/typography.component.ts", lineNumber: 10 });
})();
export {
  TypographyComponent
};
//# sourceMappingURL=chunk-P3KH54TK.js.map
