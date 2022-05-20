"ui";
ui.layout(
    <vertical>
        <webview id="web" h="*"/>
    </vertical>
)
//ui.web.getSettings().setJavaScriptEnabled(true);


ui.web.loadUrl("file://" + files.path("./index.html"))
log(ui.web.getUrl())

