# How To Upload App To Bangle
1. Run `pnpm start` to build the files into: `dist/`
2. Go to: [Espruino IDE Link](https://www.espruino.com/ide)
3. Connect watch via `Connect / Disconnect` button (top left)
4. Access files in device's storage via `storage` button (middle third)
5. Click `Upload files`
6. Navigate to `/dist`
7. All all files in `/dist`
8. IMPORTANT: When prompted for the image, rename from: `routine.png` to `routine.img`

> Once all files files are uploaded you should see the app in your app launcher.

# To Update The Checklist
> There will be a companion website, but for now do it by editing the `routine.list.json` file

1. Open the `storage` and open `routine.list.json` to edit the list.
2. Save the file.
3. Delete `routine.state.json`, otherwise the checklist will be outdated.