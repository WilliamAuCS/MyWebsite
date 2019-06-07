const Router = {
    _componentClass: null,
    routeTo()
    {
      this._componentClass = myResume;
    },
    getCurrentComponentClass()
    {
      return this._componentClass;
    }
  };
  
  export default Router;