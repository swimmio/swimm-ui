import r from"./ComponentProps.e955e041.js";import p from"./ComponentEvents.d7a88dc5.js";import i from"./ComponentSlots.f23767fc.js";import{_ as m,o as t,c as f,u as a,g as n,i as l,F as d}from"./app.d4d1573a.js";const c=[{description:"Button",tags:{},exportName:"default",displayName:"Action",props:[{name:"size",description:"The size of the button. Defaults to big.",tags:{},values:["big","small"],type:{name:"string"},defaultValue:{func:!1,value:"SIZES.BIG"}},{name:"secondary",description:"Flag for secondary button style",tags:{type:[{title:"type",type:{name:"boolean"}}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",description:"Flag for is button is loading",tags:{type:[{title:"type",type:{name:"boolean"}}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Flag for is button is disabled",tags:{type:[{title:"type",type:{name:"boolean"}}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"noPadding",description:"Flag for having no padding to the button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",description:"The html element used for the button.",tags:{},values:["button","link"],type:{name:"string"},defaultValue:{func:!1,value:"TYPES.BUTTON"}},{name:"href",description:"When setting the button\u2019s type to a link (), use this option to give a href.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"variant",description:"Variant options",tags:{},values:["danger","success"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"trailingIcon",description:"Appended icon",tags:{},values:["Any icon from Fontaweswimm library"],type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"buttonType",description:"Button type",tags:{},values:["type attr of the button tag"],type:{name:"string"},defaultValue:{func:!1,value:"'submit'"}}],events:[{name:"click"}],slots:[{name:"default"}]},{exportName:"default",displayName:"SwAvatar",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0},{name:"src",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"SIZE.LARGE"}},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:"SHAPE.ROUND"}}]},{exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"icon",type:{name:"string"},required:!0},{name:"name",type:{name:"string"},required:!0},{name:"link",type:{name:"string|object"}}]},{exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0}]},{displayName:"Divider",description:"",tags:{}},{exportName:"default",displayName:"EmptyState",description:"",tags:{},props:[{name:"iconName",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},required:!0},{name:"transparent",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"wide",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]},{displayName:"ErrorBox",description:"",tags:{},slots:[{name:"default"}]},{exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"name",type:{name:"string"},required:!0},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"noPadding",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}]},{exportName:"default",displayName:"Loader",description:"",tags:{},props:[{name:"noFlickering",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"secondary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]},{exportName:"default",displayName:"TextSkeleton",description:"",tags:{},props:[{name:"variant",type:{name:"string"},required:!0},{name:"animate",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]},{exportName:"default",displayName:"SwToggle",description:"",tags:{},props:[{name:"value",type:{name:"boolean"},required:!0},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"SIZE.MEDIUM"}}],events:[{name:"change",type:{names:["undefined"]}}]},{exportName:"default",displayName:"SwText",description:"",tags:{},props:[{name:"component",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"VARIANTS.BODY_L"}},{name:"family",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"weight",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]}],y={__name:"ComponentApi",props:{name:{type:String,required:!0}},setup(u){const o=u,e=c.filter(s=>s.displayName===o.name)[0];return(s,g)=>(t(),f(d,null,[a(e).props?(t(),n(r,{key:0,"component-props":a(e).props},null,8,["component-props"])):l("",!0),a(e).events?(t(),n(p,{key:1,"component-events":a(e).events},null,8,["component-events"])):l("",!0),a(e).slots?(t(),n(i,{key:2,"component-slots":a(e).slots},null,8,["component-slots"])):l("",!0)],64))}};var h=m(y,[["__file","ComponentApi.vue"]]);export{h as default};
