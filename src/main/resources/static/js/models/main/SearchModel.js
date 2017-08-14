
export default Backbone.Model.extend({
    urlRoot : '/search',
    defaults:{
        idx:"0",
        title:"defaultTitle",
        content:"defaultContent"
    },
    idAttribute: "idx"
});