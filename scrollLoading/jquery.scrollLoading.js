!function(t){t.fn.scrollLoading=function(n){var o={attr:"data-url",container:t(window),callback:t.noop},a=t.extend({},o,n||{});a.cache=[],t(this).each(function(){var n=this.nodeName.toLowerCase(),o=t(this).attr(a.attr),c={obj:t(this),tag:n,url:o};a.cache.push(c)});var c=function(n){t.isFunction(a.callback)&&a.callback.call(n.get(0))},i=function(){var n=a.container.height();contop=a.container.get(0)===window?t(window).scrollTop():a.container.offset().top,t.each(a.cache,function(t,o){var a,i,e=o.obj,r=o.tag,l=o.url;e&&(a=e.offset().top-contop,i=a+e.height(),(a>=0&&n>a||i>0&&n>=i)&&(l?"img"===r?c(e.attr("src",l)):e.load(l,{},function(){c(e)}):c(e),o.obj=null))})};i(),a.container.bind("scroll",i)}}(jQuery);