"use strict";$(document).ready(function(){var e=document.getElementById("app-header__toggle-mobile"),t=document.getElementById("app-header__menu");$(e).on("click",function(){$(e).toggleClass("app-header__toggle-mobile--active"),$(t).toggleClass("visible"),$(t).hasClass("visible")?document.body.style.overflow="hidden":document.body.style.overflow="auto"}),$(".b-intro__slider").slick({fade:!0}),$(".product-overview__slider").slick({responsive:[{breakpoint:1024,settings:{variableWidth:!0}}]}),$(".product-spoon__product-item__preview__item").on("click",function(){alert("123123");var e=$(this).attr("style").replace("background-image: ","");alert(e),$(this).closest(".product-spoon__product-item").find(".product-spoon__product-item__image").css("background-image",e)}),$(".cart-item-decrement").on("click",function(){var e=$(this).siblings(".form-field").find(".cart__item__count__current");$(e).get(0).value--}),$(".cart-item-increment").on("click",function(){var e=$(this).siblings(".form-field").find(".cart__item__count__current");$(e).get(0).value++}),$(".products-intro__slider-mobile").slick({variableWidth:!0}),$("#product-preview__slider_1").slick({infinite:!1,slidesToShow:3,vertical:!0,dots:!0,customPaging:function(e,t){return"<div>"+(t+1)+"</div>"}}).on("afterChange",function(e,t,i,o){}),$(".select-city").select2({placeholder:"Выберите город",minimumResultsForSearch:1/0}),$(".select-post-office").select2({placeholder:"Выберите отделение",minimumResultsForSearch:1/0}),$("#smarttab").smartTab(),$("#product-spoon__mobile__tabs").smartTab()});