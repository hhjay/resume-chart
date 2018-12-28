module.exports = {
    inserted(el, bind) {

    },
    bind(el, bind, vNode) {
        let _this = el;
        
        // <content-placeholders :rounded="true">
		// 			<content-placeholders-img />
		// 			<content-placeholders-heading />
		// 		</content-placeholders>
        // if( bind.value )
        if( !bind.value ) {
            el.append
        }
        console.log("h-loading", el, bind.value, vNode);
    },
    update(el, bind) {
    },
    unbind(el, bind) {
    }
}
