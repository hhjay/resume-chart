<template>
    <div class="chart-box">
        <!-- <content-placeholders :rounded="true" v-if="!complete">
            <content-placeholders-img />
			<content-placeholders-heading />
		</content-placeholders> -->
    </div>
</template>
<script>
    import Vue from 'vue';
	import ec from 'echarts';
	import defOption from './defOption';
    export default {
        name: 'g-chart',
        props: {
            options: [Object, String, Boolean],
            complete: {
                type: Boolean,
                default: false,
            },
            emptys: {
				type: String,
				default: ()=>{
					return "暂无数据"
				}
			},
            boxHeight: {
				type: String,
				default: "auto",
			},
			charType: {
				type: String,
				default: 'line',
			}
        },
        data() {
			return {
				instance: null
			}
		},
        watch: {
			options() {
				Vue.nextTick(() => {
					this._initOption();
				})
			},
			complete () {
				if ( !this.complete ) {
					this.loadChart();
				}
			}
		},
        methods: {
			_initComponent() {
				Vue.nextTick(() => {
					window.addEventListener('resize', this._resizeEventHandler, false);
					this._initOption();
				})
			},
			loadChart() {
				if ( this.instance ) {
					this.instance.dispose();
					this.instance = null;
				}

				this.instance = ec.init(this.$el, 'macarons', {
					height: this.boxHeight
				});

				console.log(defOption[this.charType]);
				this.instance.setOption(defOption[this.charType]);
			},
            isEmptyObj(obj) {
                let t;
                for (t in obj) {
                    return false;
                };
                return true;
            },
			_initOption() {
				if ( this.instance ) {
					this.instance.dispose();
					this.instance = null;
				}
				if ( this.complete ) {
					if ( !this.isEmptyObj(this.options) && this.options != null ) {
						if (this.options.series && this.options.series.length != 0) {
							this.instance = ec.init(this.$el, 'macarons', {
								height: this.boxHeight
							});

							this.instance.setOption(this.options);
						} else {
							this._noDataOption();
						}
					} else {
						this._noDataOption();
					}
				} else {
					this.loadChart();
				}
			},
			_resizeEventHandler() {
				if ( this.instance ) {
					throttle(this.instance.resize(), 300);
				}

			},
			_noDataOption() {
				this.$el.innerHTML = `<div class="empty">
						<span>${ this.emptys }</span>
					</div>`;
			},
		},
		mounted() {
			this._initComponent();
		},
		beforeDestroy() {
			if ( this.instance ) {
				this.instance.dispose();
			}
			window.removeEventListener('resize', this._resizeEventHandler, false);
		},
    }

    function throttle(fn, delay) {
		var timer = null;
		return function () {
			var context = this,
				args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		}
	}
</script>
