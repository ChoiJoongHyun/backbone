import UserCollection from "../collections/UserCollection";
import UserModel from "../models/UserModel";
import UserView from "../views/UserView";

export default Backbone.View.extend({
    el: $("#user"),

    initialize: function(){
        console.log("Add User view init");
        this.collection = new UserCollection();
        this.render();
        // 컬렉션 add가 호출되면 renderUser를 trigger 한다
        this.collection.on("add", this.renderUser, this);
        /*this.collection.on("remove", this.removeUser, this);*/
    },

    render: function(){
        var that = this;
        _.each(this.collection.models, function(item){
            that.renderUser(item);
        }, this);
    },

    renderUser: function(item){
        var userView = new UserView({
            model: item
        });
        this.$el.append(userView.render().el);
    },

    addUser: function(e){
        e.preventDefault();

        var formData = {};
        // jQuery의 each로 formData key=value 객체를 만듦
        $("#addUser").children("input").each(function (i, el) {
            if ($(el).val() !== "") {
                console.log("val : " + $(el).val());
                formData[el.id] = $(el).val();
            }
        });

        // 컬렉션 객체에 저장
        this.collection.add(new UserModel(formData));
    },

    // 삭제된 모델을 인자로 자동 넣어준다
    /*removeUser: function(removedUser){
        // attributes는 Model의 hash key=value object 이다
        var removedUserData = removedUser.attributes;

        _.each(removedUserData, function(val, key){
            if(removedUserData[key] === removedUser.defaults[key]){
                console.log(">> 1 : " + removedUserData[key]);
                delete removedUserData[key];
            }
        });
    },*/

    events:{
        "click #add": "addUser"
    }
});