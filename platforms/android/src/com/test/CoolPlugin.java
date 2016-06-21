/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.test;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;




public class CoolPlugin extends CordovaPlugin {
    private ShowingDialog mClass;
    public static final String TAG = "Cool Plugin";

    String BB="pp";

    /**
     * Constructor.
     */
    public CoolPlugin() {}

    /**
     * Sets the context of the Command. This can then be used to do things like
     * get file paths associated with the Activity.
     *
     * @param cordova The context of the main Activity.
     * @param webView The CordovaWebView Cordova is running in.
     */

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        Log.e(TAG,"Init CoolPlugin");
    }

    public boolean execute(final String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        final Context context=this.cordova.getActivity();
        final int duration = Toast.LENGTH_SHORT;
        // Shows a toast
        Log.v(TAG, "CoolPlugin received:" + action);
        if(action.equals("CoolPlugin")) {
            cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    showDialog(context, callbackContext);
                }
            });
        }
        return true;
    }


    public String showDialog(Context context, CallbackContext callbackContext){
        mClass = new ShowingDialog();
        return mClass.showDialog(context,callbackContext);
    }







}