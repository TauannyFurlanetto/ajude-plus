package com.ajudeplus;
 
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import android.telephony.SmsManager;

// https://medium.com/@fatemefazli.bv/sending-direct-sms-in-react-native-android-d902d6bf1f04
public class DirectSmsModule extends ReactContextBaseJavaModule {
 
    public DirectSmsModule(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
    }
 
    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() {
        return "DirectSms";
    }
 
    @ReactMethod
    public void sendDirectSms(String numbers, String msg) {
        try {    
            SmsManager smsManager = SmsManager.getDefault();
            smsManager.sendTextMessage(numbers, null, msg, null, null);   
        } catch (Exception ex) {
            System.out.println("couldn't send message.");
        }
    }
}
