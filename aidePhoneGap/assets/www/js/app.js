/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = (function(){
    var
		devicePlatform = 'NOT INITIALIZED',
		isPhoneGap = false,
        bindEvents = function() {
			try {
				devicePlatform = device.platform;
				isPhoneGap = true;
        		document.addEventListener('deviceready', onDeviceReady, false);
			}catch (err){
				window.onload = windowOnload;
			}			
		},
		setDevicePlatformElement = function(){
			var 
				id = document.getElementById("devicePlatform");
				id.innerHTML = devicePlatform;
		},
		windowOnload = function(){
			setDevicePlatformElement();
		},
    	onDeviceReady = function() {
			devicePlatform = device.platform;
			setDevicePlatformElement();
    	},
		init = function(){

			bindEvents();
		};
		return {
			init: init
		};
	})
();

