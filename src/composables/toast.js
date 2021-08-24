import {computed} from 'vue';
import {useStore} from 'vuex';


export default useToast  = () =>{
    const store = useStore();
    const toasts = computed(() => store.state.toasts.toasts);
    
    // const toastMessage = computed(() => store.getters['toast/toastMessageWithSmile']);
    // const toastAlertType = computed(() => store.state.toast.toastAlertType);
    // const showToast = computed(() => store.state.toast.showToast); 

    const tirggerToast = (message, type= 'success') =>{
        store.dispatch('toast/tirggerToast',message,type);
    }
    return(
        toasts,
        tirggerToast
    )
}