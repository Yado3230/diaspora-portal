"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6233],{6233:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<o;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,i++)n[i]=r[s];return n},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},l=a(o(2265)),d=a(o(54887)),h=a(o(42077)),u=a(o(38707)),p=function(t){function e(e){var o=t.call(this,e)||this;o.dirtyProps=["modules","formats","bounds","theme","children"],o.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],o.state={generation:0},o.selection=null,o.onEditorChange=function(t,e,n,i){var r,s;"text-change"===t?null===(r=o.onEditorChangeText)||void 0===r||r.call(o,o.editor.root.innerHTML,e,i,o.unprivilegedEditor):"selection-change"===t&&(null===(s=o.onEditorChangeSelection)||void 0===s||s.call(o,e,i,o.unprivilegedEditor))};var n=o.isControlled()?e.value:e.defaultValue;return o.value=null!=n?n:"",o}return i(e,t),e.prototype.validateProps=function(t){if(l.default.Children.count(t.children)>1)throw Error("The Quill editing area can only be composed of a single React element.");if(l.default.Children.count(t.children)){var e=l.default.Children.only(t.children);if((null==e?void 0:e.type)==="textarea")throw Error("Quill does not support editing on a <textarea>. Use a <div> instead.")}if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")},e.prototype.shouldComponentUpdate=function(t,e){var o,n=this;if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){var i=this.getEditorContents(),r=null!=(o=t.value)?o:"";this.isEqualValue(r,i)||this.setEditorContents(this.editor,r)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),s(this.cleanProps,this.dirtyProps).some(function(e){return!h.default(t[e],n.props[e])})},e.prototype.shouldComponentRegenerate=function(t){var e=this;return this.dirtyProps.some(function(o){return!h.default(t[o],e.props[o])})},e.prototype.componentDidMount=function(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())},e.prototype.componentWillUnmount=function(){this.destroyEditor()},e.prototype.componentDidUpdate=function(t,e){var o=this;if(this.editor&&this.shouldComponentRegenerate(t)){var n=this.editor.getContents(),i=this.editor.getSelection();this.regenerationSnapshot={delta:n,selection:i},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){var r=this.regenerationSnapshot,n=r.delta,s=r.selection;delete this.regenerationSnapshot,this.instantiateEditor();var a=this.editor;a.setContents(n),c(function(){return o.setEditorSelection(a,s)})}},e.prototype.instantiateEditor=function(){this.editor?this.hookEditor(this.editor):this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig())},e.prototype.destroyEditor=function(){this.editor&&this.unhookEditor(this.editor)},e.prototype.isControlled=function(){return"value"in this.props},e.prototype.getEditorConfig=function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},e.prototype.getEditor=function(){if(!this.editor)throw Error("Accessing non-instantiated editor");return this.editor},e.prototype.createEditor=function(t,e){var o=new u.default(t,e);return null!=e.tabIndex&&this.setEditorTabIndex(o,e.tabIndex),this.hookEditor(o),o},e.prototype.hookEditor=function(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)},e.prototype.unhookEditor=function(t){t.off("editor-change",this.onEditorChange)},e.prototype.getEditorContents=function(){return this.value},e.prototype.getEditorSelection=function(){return this.selection},e.prototype.isDelta=function(t){return t&&t.ops},e.prototype.isEqualValue=function(t,e){return this.isDelta(t)&&this.isDelta(e)?h.default(t.ops,e.ops):h.default(t,e)},e.prototype.setEditorContents=function(t,e){var o=this;this.value=e;var n=this.getEditorSelection();"string"==typeof e?t.setContents(t.clipboard.convert(e)):t.setContents(e),c(function(){return o.setEditorSelection(t,n)})},e.prototype.setEditorSelection=function(t,e){if(this.selection=e,e){var o=t.getLength();e.index=Math.max(0,Math.min(e.index,o-1)),e.length=Math.max(0,Math.min(e.length,o-1-e.index)),t.setSelection(e)}},e.prototype.setEditorTabIndex=function(t,e){var o;(null===(o=null==t?void 0:t.scroll)||void 0===o?void 0:o.domNode)&&(t.scroll.domNode.tabIndex=e)},e.prototype.setEditorReadOnly=function(t,e){e?t.disable():t.enable()},e.prototype.makeUnprivilegedEditor=function(t){return{getHTML:function(){return t.root.innerHTML},getLength:t.getLength.bind(t),getText:t.getText.bind(t),getContents:t.getContents.bind(t),getSelection:t.getSelection.bind(t),getBounds:t.getBounds.bind(t)}},e.prototype.getEditingArea=function(){if(!this.editingArea)throw Error("Instantiating on missing editing area");var t=d.default.findDOMNode(this.editingArea);if(!t)throw Error("Cannot find element for editing area");if(3===t.nodeType)throw Error("Editing area cannot be a text node");return t},e.prototype.renderEditingArea=function(){var t=this,e=this.props,o=e.children,n=e.preserveWhitespace,i={key:this.state.generation,ref:function(e){t.editingArea=e}};return l.default.Children.count(o)?l.default.cloneElement(l.default.Children.only(o),i):n?l.default.createElement("pre",r({},i)):l.default.createElement("div",r({},i))},e.prototype.render=function(){var t;return l.default.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:"quill "+(null!=(t=this.props.className)?t:""),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},e.prototype.onEditorChangeText=function(t,e,o,n){if(this.editor){var i,r,s=this.isDelta(this.value)?n.getContents():n.getHTML();s!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=s,null===(r=(i=this.props).onChange)||void 0===r||r.call(i,t,e,o,n))}},e.prototype.onEditorChangeSelection=function(t,e,o){if(this.editor){var n,i,r,s,a,l,d=this.getEditorSelection(),u=!d&&t,p=d&&!t;!h.default(t,d)&&(this.selection=t,null===(i=(n=this.props).onChangeSelection)||void 0===i||i.call(n,t,e,o),u?null===(s=(r=this.props).onFocus)||void 0===s||s.call(r,t,e,o):p&&(null===(l=(a=this.props).onBlur)||void 0===l||l.call(a,d,e,o)))}},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.blur=function(){this.editor&&(this.selection=null,this.editor.blur())},e.displayName="React Quill",e.Quill=u.default,e.defaultProps={theme:"snow",modules:{},readOnly:!1},e}(l.default.Component);function c(t){Promise.resolve().then(t)}t.exports=p}}]);