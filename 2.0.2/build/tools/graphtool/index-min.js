/*!build time : 2014-08-04 1:28:16 PM*/
KISSY.add("kg/kcharts/2.0.2/tools/graphtool/index",function(a){var b=Math.sqrt,c={},d=function(a,c,d,e,f){var g,h=["M"+[c,d-e].join(","),"L"+[c-e*b(3)/2,d-0+1*e/2].join(","),[c-0+e*b(3)/2,d-0+1*e/2].join(","),"Z"].join(" ");return a&&a.path?(g=a.path(h),g.rotate(f,c,d),g):void 0},e=function(a,b,c,d,e,f){var g,h=["M"+[b,c-e/2].join(","),"L"+[b-0+d/2,c].join(","),[b,c-0+e/2].join(","),[b-d/2,c].join(","),"Z"].join(",");return a&&a.path?(g=a.path(h),g.rotate(f,b,c),g):void 0},f=function(a,b,c,d,e){var f,g=[["M",b-d/2,",",c-e/2].join(""),[" L",b/1+d/2,",",c-e/2," v",e," h",-d,"z"].join("")];return a&&a.path?f=a.path(g):void 0};return c=a.merge(c,{triangle:d,rhomb:e,square:f})},{requires:["kg/kcharts/2.0.2/raphael/index"]});