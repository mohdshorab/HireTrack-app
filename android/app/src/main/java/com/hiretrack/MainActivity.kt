package com.hiretrack

import android.os.Bundle
import com.swmansion.rnscreens.fragment.restoration.RNScreensFragmentFactory
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.zoontek.rnbootsplash.RNBootSplash

class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    // 1. Set the fragment factory for react-native-screens (React Navigation)
    supportFragmentManager.fragmentFactory = RNScreensFragmentFactory()
    // 2. Initialize the splash screen BEFORE super.onCreate
    RNBootSplash.init(this, R.style.BootTheme)
    // 3. Call super.onCreate
    super.onCreate(savedInstanceState)
  }
  
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "HireTrack"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
