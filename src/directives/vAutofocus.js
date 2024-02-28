//GLOBAL CUSTOM DIRECTIVES
export const vAutofocus =  { //becomes v-autofocus on the template
  //hook inside
  //different name
  mounted: (el) => {
    console.log("autofocus")
    el.focus()
  }
};