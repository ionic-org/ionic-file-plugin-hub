import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// page
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { IOSPage } from '../pages/ios/ios';
import { AndroidPage } from '../pages/android/android';
import { GithubPage } from '../pages/github/github';
// plugin
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediaCapture } from '@ionic-native/media-capture';
// provider
import { JsonProvider } from './../providers/json/json';
// apache
import { FileProvider } from './../providers/apache/file';
import { CameraProvider } from './../providers/apache/camera';
import { MediaProvider } from './../providers/apache/media';
import { MediaCaptureProvider } from './../providers/apache/media-capture';
// other
// 图片
import { PhotoLibraryProvider } from './../providers/other/photo-library';
import { ImagePickerProvider } from './../providers/other/image-picker';
import { ImageResizerProvider } from './../providers/other/image-resizer';
import { CropProvider } from './../providers/other/crop';
// 视频
import { StreamingMediaProvider } from './../providers/other/streaming-media';
import { VideoEditorProvider } from './../providers/other/video-editor';
// 音频
import { NativeAudioProvider } from './../providers/other/native-audio';
import { MusicControlsProvider } from './../providers/other/music-controls';
import { SpeechRecognitionProvider } from './../providers/other/speech-recognition';
import { TextToSpeechProvider } from './../providers/other/text-to-speech';
import { SpeechKitProvider } from './../providers/other/speech-kit';
// 文件
import { ChooserProvider } from './../providers/other/chooser';
// ios
import { IosLastCamProvider } from './../providers/other/ios-last-cam';
import { IosFilePickerProvider } from './../providers/other/ios-file-picker';
import { IosDocumentPickerProvider } from './../providers/other/ios-document-picker';
// android
import { AndroidFileChooserProvider } from './../providers/other/android-file-chooser';
import { AndroidVideoPlayerProvider } from './../providers/other/android-video-player';
import { PluginHubProvider } from '../providers/plugin-hub/plugin-hub';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    IOSPage,
    AndroidPage,
    GithubPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    IOSPage,
    AndroidPage,
    GithubPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MediaCapture,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonProvider,
    // apache
    FileProvider,
    CameraProvider,
    MediaProvider,
    MediaCaptureProvider,
    // other
    // 图片
    PhotoLibraryProvider,
    ImagePickerProvider,
    ImageResizerProvider,
    CropProvider,
    // 视频
    StreamingMediaProvider,
    VideoEditorProvider,
    // 音频
    NativeAudioProvider,
    MusicControlsProvider,
    SpeechRecognitionProvider,
    TextToSpeechProvider,
    SpeechKitProvider,
    // 文件
    ChooserProvider,
    // ios
    IosLastCamProvider,
    IosFilePickerProvider,
    IosDocumentPickerProvider,
    // android
    AndroidFileChooserProvider,
    AndroidVideoPlayerProvider,
    PluginHubProvider
  ]
})
export class AppModule {}
