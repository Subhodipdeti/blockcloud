## BlockCloud

### Running the app

- Run ```npx react-native run-android``` for Android
- Run ```npx react-native run-ios``` for IOS

### Note

- if we delete node_module the we have to add this code on this path node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m

```
#pragma mark - CALayerDelegate

- (void)displayLayer:(CALayer *)layer
{
  if (_currentFrame) {
    layer.contentsScale = self.animatedImageScale;
    layer.contents = (__bridge id)_currentFrame.CGImage;
  } else {
    [super displayLayer:layer];
  }
}
```

