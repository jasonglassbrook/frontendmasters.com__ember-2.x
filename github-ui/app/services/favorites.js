import Service from "@ember/service";

export default Service.extend({
  init(...args) {
    this._super(...args);
    this.items = this.items || [];
  },

  addItem(item) {
    this.get("items").addObject(item);
  },
});
