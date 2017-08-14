import SearchModel from "../../models/main/SearchModel";
export default Backbone.Collection.extend({
    url : '/search',
    model : SearchModel
});