import Vue from 'vue';
import Loading from './index.vue';

const hasClass = (dom, target)=>{
    let oClass = dom.getAttribute('class').split(' ') || [];
    return  oClass.incudes(target);
}

const addClass = (dom, newClass)=>{
    if( !hasClass(dom, newClass) ) {
        let oClass = dom.getAttribute('class').split(' ') || [];

        dom.setAttribute('class', oClass.push(newClass).join(' '));
    }
}

module.exports = {
    bind(el, bind, vNode) {
        let _this = el;
        
        // <content-placeholders :rounded="true">
		// 			<content-placeholders-img />
		// 			<content-placeholders-heading />
		// 		</content-placeholders>
        // if( bind.value )
        if( !bind.value ) {
            el.
            addClass(el, 'h-loading__parent')
            el.appendChild(Loading);
        }
        console.log("h-loading", el, bind.value, vNode);
    },
    update(el, bind) {
    },
    unbind(el, bind) {
    }
}

