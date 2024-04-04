"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{321:function(n,t,e){e.r(t),e.d(t,{Currency:function(){return j}});var d,i,r,a,p,x=e(2791),h=e(168),s=e(5216),o=s.ZP.div(d||(d=(0,h.Z)(["\n  position: relative;\n  background: rgba(74, 86, 226, 0.1);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  img {\n    width: 100%;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 40px;\n    border-bottom-left-radius: unset;\n    border-bottom-right-radius: unset;\n  }\n"]))),l=s.ZP.span(i||(i=(0,h.Z)(["\n  display: none;\n\n  @media screen and (min-width: 1280px) {\n    display: inline;\n    position: absolute;\n    top: 55px;\n    left: 46px;\n    color: rgba(255, 134, 141, 1);\n    font-size: 12px;\n  }\n"]))),c=s.ZP.span(r||(r=(0,h.Z)(["\n  display: none;\n\n  @media screen and (min-width: 1280px) {\n    display: inline;\n    position: absolute;\n    top: 20px;\n    right: 94px;\n    color: rgba(255, 134, 141, 1);\n    font-size: 12px;\n  }\n"]))),g=s.ZP.div(a||(a=(0,h.Z)(["\n  background: rgba(74, 86, 226, 0.1);\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n  width: 320px;\n  margin-top: 24px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    width: 336px;\n    margin-top: 0px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 480px;\n    margin-top: 0px;\n    border-bottom-left-radius: unset;\n    border-bottom-right-radius: unset;\n  }\n"]))),m=s.ZP.table(p||(p=(0,h.Z)(["\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 0px, 0px, 8px, 8px;\n  color: var(--white);\n  background: rgba(74, 86, 226, 0.1);\n\n  @media screen and (min-width: 1280px) {\n    width: 480px;\n    border-radius: 0;\n  }\n\n  th,\n  td {\n    text-align: center;\n    line-height: 1.5;\n  }\n\n  th {\n    font-weight: 600;\n    line-height: 1.5;\n    padding: 12px;\n\n    @media screen and (min-width: 1280px) {\n      padding: 16px;\n    }\n  }\n\n  thead th:nth-child(1) {\n    width: 33%;\n    padding-left: 20px;\n    text-align: left;\n\n    @media screen and (min-width: 1280px) {\n      padding-left: 62px;\n    }\n  }\n\n  thead th:nth-child(2) {\n    width: 34%;\n  }\n\n  thead th:nth-child(3) {\n    width: 33%;\n    padding-right: 20px;\n    text-align: right;\n\n    @media screen and (min-width: 1280px) {\n      padding-right: 130px;\n    }\n  }\n\n  td {\n    padding: 8px 8px 4px;\n\n    @media screen and (min-width: 768px) and (max-width: 1279px) {\n    }\n\n    @media screen and (min-width: 1280px) {\n      padding: 24px 8px 0px;\n    }\n  }\n\n  tbody td:nth-child(1) {\n    padding-left: 20px;\n    text-align: left;\n\n    @media screen and (min-width: 1280px) {\n      padding-left: 84px;\n    }\n  }\n\n  tbody td:nth-child(3) {\n    padding-right: 20px;\n    text-align: right;\n\n    @media screen and (min-width: 1280px) {\n      padding-right: 130px;\n    }\n  }\n  tbody tr:nth-child(2) {\n    td {\n      padding-bottom: 0px;\n    }\n  }\n\n  thead {\n    background: rgba(255, 255, 255, 0.2);\n  }\n"]))),u=function(n){return n.currency.data},b=e(5177),w=e(4420),f=e(184),j=function(){var n=(0,w.I0)();(0,x.useEffect)((function(){var t=localStorage.getItem("persist:currency");"null"!==JSON.parse(t).data?function(){var n=localStorage.getItem("persist:currency"),t=JSON.parse(n);if(t){var e=Date.parse(t.fetchingTime);return new Date-e>=36e5}return!1}()&&n((0,b.k)()):n((0,b.k)())}),[n]);var t=(0,w.v9)(u);return(0,f.jsxs)(g,{children:[(0,f.jsxs)(m,{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Currency"}),(0,f.jsx)("th",{children:"Purchase"}),(0,f.jsx)("th",{children:"Sale"})]})}),(0,f.jsxs)("tbody",{children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"USD"}),(0,f.jsx)("td",{children:t.USD.buy.toFixed(2)}),(0,f.jsx)("td",{children:t.USD.sale.toFixed(2)})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"EUR"}),(0,f.jsx)("td",{children:t.EUR.buy.toFixed(2)}),(0,f.jsx)("td",{children:t.EUR.sale.toFixed(2)})]})]})]}),(0,f.jsxs)(o,{children:[(0,f.jsx)("source",{alt:"Currency",media:"(min-width: 768px) and (max-width: 1023px)"}),(0,f.jsx)("source",{alt:"Currency",media:"(min-width: 1024px)"}),(0,f.jsx)("img",{alt:"Currency",draggable:"false"}),(0,f.jsx)(l,{children:t.USD.buy.toFixed(2)}),(0,f.jsx)(c,{children:t.EUR.buy.toFixed(2)})]})]})}}}]);
//# sourceMappingURL=321.57c9009c.chunk.js.map