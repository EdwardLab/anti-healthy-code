"ui";

ui.layout(
    <vertical h="auto">
                 <appbar>
             <toolbar id="toolbar" title="行程码演示 1.0" />
         </appbar>
            <text textSize="16sp">仅限演示，请勿用于非法用途！Telegram:+16167997429</text>
        <linear gravity="center">
            <button text="运行行程码演示" gravity="center" id="anti" w="auto"/>
       
            
        </linear>
    </vertical>
);
ui.anti.on("click", () => {
engines.execScriptFile("anti.js");
});



