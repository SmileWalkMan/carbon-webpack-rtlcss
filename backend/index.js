const http = require("http");
const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssRTL = require("postcss-rtl");
const rtlcssOptions = {};

//create a server object:

http
  .createServer((req, res) => {
    const commonFilePath = path.join(__dirname, "../", "dist", req.url);
    const filePath = req.url.endsWith("/")
      ? path.join(commonFilePath, "index.html")
      : commonFilePath;

    if (
      req.url.endsWith("carbon-components.min.scss") ||
      req.url.endsWith("carbon-components.scss")
    ) {
      // Load the External carbon-components.min.css
      // const fetchUrl = require("fetch").fetchUrl;
      // let cssURL = "https://unpkg.com/carbon-components@10.26.0/css/carbon-components.min.css";
      // fetchUrl(cssURL, function(err, meta, body){
      //     if(err) {
      //       res.statusCode = 500;
      //       res.write(JSON.stringify(err));
      //       return res.end();
      //     }
      //     let cssOutput = rtlcss.process(body.toString());
      //     res.write(cssOutput);
      //     res.end();
      // });

      // Load the a[[/carbon-components.min.scss with RTLCSS
      let cssPath = path.join(__dirname, "../", "app", req.url);
      fs.readFile(cssPath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.write(JSON.stringify(err));
          return res.end();
        }
        let result = postcss([postcssRTL(rtlcssOptions)]).process(
          data.toString()
        );
        let cssOutput = result.css;
        res.write(cssOutput);
        res.end();
      });
    } else {
      fs.readFile(filePath, (err, file) => {
        if (err) {
          res.statusCode = 500;
          res.write(JSON.stringify(err));
          return res.end();
        }
        res.write(file);
        res.end();
      });
    }
  })
  .listen(1234); //the server object listens on port 1234
process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});
