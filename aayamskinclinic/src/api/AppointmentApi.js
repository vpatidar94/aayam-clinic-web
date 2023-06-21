export default class AppointmentApi {
    getWattsappApi = async (message) => {
                try {
                    console.log("mesage",message);
                    
                    //https://ziper.io/api/send.php?number=917898118503&type=text&message=CHITULOLO&ins[…]e_id=6453479F141A2&access_token=0a3e27126c2c239bdf7f9128943ef9c0
                    const res = await fetch("https://ziper.io/api/send.php" + '?' + new URLSearchParams({
                        number: "917470909055",
                        type:"text",
                        message: message,
                        instance_id:"647B3C9AA8D0A",
                        access_token:"0a3e27126c2c239bdf7f9128943ef9c0"
                    }), {
                        method: 'GET',
                    });
                    const result = await res.json();
                    return result;
                } catch (e) {
                    throw new Error(e.message, e.options);
                }
            }
    
    }
