---
title: "Java - Spring Framework - Web - Upload & Download File"
created: 2021-04-13T15:41:42.355-05:00
modified: 2022-12-22T10:02:11.756-06:00
parent: "[[Java - Spring Framework - Web／Network／API Libraries]]"
children: []
---
```
## MULTIPART (MultipartProperties)
# Enable multipart uploads
spring.servlet.multipart.enabled=true
# Threshold after which files are written to disk.
spring.servlet.multipart.file-size-threshold=2KB
# Max file size.
spring.servlet.multipart.max-file-size=200MB
# Max Request Size
spring.servlet.multipart.max-request-size=215MB
# All files uploaded through the REST API will be stored in this directory
file.upload-dir=/home/yogesh/media/upload
```
```
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.charset.StandardCharsets;

@RestController
public class DocumentController {

    @PostMapping("/uploadFile")
    public void uploadFile(@RequestParam("file") MultipartFile file) {
        // do something with file
    }

    @GetMapping("/downloadFile")
    public ResponseEntity<Resource> downloadFile() {
        String str = "{\"field\":\"Hello, World!\"}";
        Resource resource = new ByteArrayResource(str.getBytes(StandardCharsets.UTF_8));
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"sample.json\"")
                .body(resource);
    }
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
