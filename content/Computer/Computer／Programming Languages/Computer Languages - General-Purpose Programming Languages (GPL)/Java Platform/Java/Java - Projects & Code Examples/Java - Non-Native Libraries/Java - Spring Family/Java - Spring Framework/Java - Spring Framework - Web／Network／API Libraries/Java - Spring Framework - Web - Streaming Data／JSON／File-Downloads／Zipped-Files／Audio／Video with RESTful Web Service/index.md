---
title: "Java - Spring Framework - Web - Streaming Data／JSON／File-Downloads／Zipped-Files／Audio／Video with RESTful Web Service"
created: 2022-12-08T20:25:13.508-06:00
modified: 2022-12-22T10:01:58.602-06:00
parent: "[[Java - Spring Framework - Web／Network／API Libraries]]"
children: []
---
### Streaming - Options

> [!expand-ui]- HttpServletResponse’s OutputStream – old approach
> <code><font style="color: rgb(122,134,154);">OutputStream</font></code> is obtained from <code><font style="color: rgb(122,134,154);">HttpServletResponse</font></code> and then the content is written to the <code><font style="color: rgb(122,134,154);">OutputStream</font></code> object

> [!expand-ui]- StreamingResponseBody as Return Type
> <code><font style="color: rgb(122,134,154);">StreamingResponseBody</font></code> type is used for async request processing and content can be written directly to the response <code><font style="color: rgb(122,134,154);">OutputStream</font></code> without holding up the threads in the servlet container
>
> <code><font style="color: rgb(122,134,154);">StreamingResponseBody</font></code> timeout should be increased if you are returning a huge stream and your application throws a timeout exception. The following property can be set in <code><font style="color: rgb(122,134,154);">application.properties</font></code> file or <code><font style="color: rgb(122,134,154);">application.yml</font></code> file to increase the timeout
> ```
> spring.mvc.async.request-timeout = 3600000
> ```
>
> Its highly recommended to configure the TaskExecutor for executing asynchronous requests in Spring MVC
> ```
> @Configuration
> @EnableAsync
> @EnableScheduling
> public class AsyncConfig implements AsyncConfigurer {
>
>    private final Logger log = LoggerFactory.getLogger(AsyncConfig.class);
>    private final TaskExecutionProperties taskExecutionProperties;
>
>    public AsyncConfig(TaskExecutionProperties taskExecutionProperties) {
>        this.taskExecutionProperties = taskExecutionProperties;
>    }
>
>    @Override
>    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
>        return new SimpleAsyncUncaughtExceptionHandler();
>    }
>
>    @Override
>    @Bean(name = "taskExecutor")
>    public Executor getAsyncExecutor() {
>        log.debug("Create Async Task Executor");
>        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
> //        executor.setCorePoolSize(taskExecutionProperties.getPool().getCoreSize());
> //        executor.setMaxPoolSize(taskExecutionProperties.getPool().getMaxSize());
> //        executor.setQueueCapacity(taskExecutionProperties.getPool().getQueueCapacity());
> //        executor.setThreadNamePrefix(taskExecutionProperties.getThreadNamePrefix());
>        executor.setCorePoolSize(1);
>        executor.setMaxPoolSize(2);
>        executor.setQueueCapacity(50);
>        return executor;
>    }
>
>    @Bean
>    protected ConcurrentTaskExecutor getTaskExecutor() {
>        return new ConcurrentTaskExecutor(this.getAsyncExecutor());
>    }
>
>    @Bean
>    protected WebMvcConfigurer webMvcConfigurer() {
>        return new WebMvcConfigurer() {
>            @Override
>            public void configureAsyncSupport(AsyncSupportConfigurer configurer) {
>                configurer.setTaskExecutor(getTaskExecutor());
>            }
>        };
>    }
> }
> ```

> [!expand-ui]- Spring WebFlux publishers
> [[Java - Spring - Webflux|Spring WebFlux]] is introduced in the Spring 5 version and works similarly to Spring MVC. Spring WebFlux supports fully non-blocking reactive streams and provides awesome features. Flux publisher present in Spring WebFlux provides ready-made support for streaming data, without providing any additional configuration
# Streaming Data - Examples

> [!expand-ui]- Stream data using HttpServletResponse's OutputStream
> ```
> @GetMapping("/data-0")
> public void downloadDocument(final HttpServletResponse response) throws IOException {
>     final String jsonPersonal = " some json encoded data here";
>     IOUtils.copy(IOUtils.toInputStream(jsonPersonal), response.getOutputStream());
>     response.flushBuffer();
> }
> ```

> [!expand-ui]- ResponseEntity<StreamingResponseBody>
> ```
> @GetMapping("/data-1")
> public ResponseEntity<StreamingResponseBody> streamData() {
>     StreamingResponseBody responseBody = response -> {
>         for (int i = 1; i <= 1000; i++) {
>             try {
>                 Thread.sleep(10);
>                 response.write(("Data stream line - " + i + "\n").getBytes());
>             } catch (InterruptedException e) {
>                 e.printStackTrace();
>             }
>         }
>     };
>     return ResponseEntity.ok()
>             .contentType(MediaType.TEXT_PLAIN)
>             .body(responseBody);
> }
> ```

> [!expand-ui]- Flux<Object>
> ```
> @GetMapping(value = "/data/flux", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
> public Flux<Object> streamDataFlux() {
>   return Flux.interval(Duration.ofSeconds(1)).map(i -> "Data stream line - " + i );
> }
> ```
# Streaming JSON - Examples

> [!expand-ui]- ResponseEntity<StreamingResponseBody>
> ```
> @GetMapping("/download-7")
> public ResponseEntity<StreamingResponseBody> streamJson() {
>     int maxRecords = 1000;
>     StreamingResponseBody responseBody = response -> {
>         for (int i = 1; i <= maxRecords; i++) {
>             Student st = new Student("Name" + i, i);
>             ObjectMapper mapper = new ObjectMapper();
>             String jsonString = mapper.writeValueAsString(st) +"\n";
>             response.write(jsonString.getBytes());
>             response.flush();
>             try {
>                 Thread.sleep(100);
>             } catch (InterruptedException e) {
>                 e.printStackTrace();
>             }
>         }
>     };
>     return ResponseEntity.ok()
>             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"download-7.txt\"")
>             .body(responseBody);
> }
> ```

> [!expand-ui]- StreamingResponseBody
> ```
> Stream<Student> students = Stream.of(
>         new Student("marcus", 1),
>         new Student("marcus", 1),
>         new Student("marcus", 1),
>         new Student("marcus", 1),
>         new Student("marcus", 1));
>
> @GetMapping("/download-8")
> public StreamingResponseBody streamingResponseBody2(HttpServletResponse response) throws IOException {
>     response.setContentType("application/x-iso9660-image");
>     response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"test.txt\"");
>     return outputStream -> {
>         students.forEachOrdered(student -> {
>             ObjectMapper mapper = new ObjectMapper();
>             try {
>                 System.out.println("output");
>                 outputStream.write(mapper.writeValueAsString(student).getBytes());
>                 outputStream.flush();
>                 Thread.sleep(100);
>             } catch (Exception e) {
>                 throw new RuntimeException(e);
>             }
>         });
>     };
> }
> ```
# Streaming Static File Download - Examples

Set a header for <code><font style="color: rgb(122,134,154);">CONTENT\_DISPOSITION</font></code> which will have value as <code><font style="color: rgb(122,134,154);">attachment</font></code> and a <code><font style="color: rgb(122,134,154);">filename</font></code>. Based upon this, the client of REST API will identify that it should be downloaded as a file with mentioned filename

> [!expand-ui]- HttpServletResponse's OutputStream
> ```
> @RequestMapping("/download-0")
> public void downloadDocument(final HttpServletResponse response) throws IOException {
>     final String jsonPersonal = " some json encoded data here";
>
>     response.setCharacterEncoding("UTF-8");
>     response.setHeader("Content-Transfer-Encoding", "binary");
>     response.setContentType("application/json");
>     response.setContentLength(jsonPersonal.length());
>     response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"example.json\"");
>
>     IOUtils.copy(IOUtils.toInputStream(jsonPersonal), response.getOutputStream());
>
>     response.flushBuffer();
> }
> ```

> [!expand-ui]- StreamingResponseBody
> ```
> @GetMapping("/download-1")
> public StreamingResponseBody streamingResponseBody(HttpServletResponse response) throws IOException {
>     response.setContentType("application/x-iso9660-image");
>     response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"proxmox-ve_7.2-1.iso\"");
>     InputStream inputStream = new FileInputStream("/path/to/proxmox-ve_7.2-1.iso");
>     return outputStream -> {
>         int nRead;
>         byte[] data = new byte[1024];
>         while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
>             System.out.println("Writing some bytes of file...");
>             outputStream.write(data, 0, nRead);
>         }
>     };
> }
> ```
> ```
> @GetMapping("/download-2")
> public void getSteamingFile1(HttpServletResponse response) throws IOException {
>     response.setContentType("application/x-iso9660-image");
>     response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"proxmox-ve_7.2-1.iso\"");
>     InputStream inputStream = new FileInputStream("/Users/marcuschiu/Desktop/iso/proxmox-ve_7.2-1.iso");
>     int nRead;
>     while ((nRead = inputStream.read()) != -1) {
>         response.getWriter().write(nRead);
>     }
> }
> ```

> [!expand-ui]- InputStreamResource
> ```
> @GetMapping("/download-3")
> public InputStreamResource FileSystemResource(HttpServletResponse response) throws IOException {
>     response.setContentType("application/x-iso9660-image");
>     response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"proxmox-ve_7.2-1.iso\"");
>     InputStreamResource resource = new InputStreamResource(new FileInputStream("/Users/marcuschiu/Desktop/iso/proxmox-ve_7.2-1.iso"));
>     return resource;
> }
> ```

> [!expand-ui]- ResponseEntity<Resource>
> ```
> @GetMapping("/download-4")
> public ResponseEntity<Resource> download(String param) throws IOException {
>     InputStreamResource resource = new InputStreamResource(new FileInputStream("/Users/marcuschiu/Desktop/iso/proxmox-ve_7.2-1.iso"));
>     return ResponseEntity.ok()
>             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"proxmox-ve_7.2-1.iso\"")
>             .body(resource);
> }
> ```
# Streaming Dynamic File Download - Examples

> [!expand-ui]- ResponseEntity<Resource>
> ```
> @GetMapping("/download-5")
> public ResponseEntity<Resource> download5() {
>     InputStream inputStream = repeat("Hello World! ".getBytes(StandardCharsets.UTF_8), 76978456);
>     InputStreamResource resource = new InputStreamResource(inputStream);
>
>     return ResponseEntity.ok()
>             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"example.txt\"")
>             .body(resource);
> }
>
> public static InputStream repeat(byte[] sample, int times) {
>     return new InputStream() {
>         private long pos = 0;
>         private final long total = (long) sample.length * times;
>
>         public int read() {
>             System.out.println(pos);
>             return pos < total ?
>                     sample[(int) (pos++ % sample.length)] :
>                     -1;
>         }
>     };
> }
> ```

> [!expand-ui]- ResponseEntity<StreamingResponseBody>
> ```
> @GetMapping("/download")
> public ResponseEntity<StreamingResponseBody> streamContentAsFile() {
>     StreamingResponseBody responseBody = response -> {
>         for (int i = 1; i <= 1000; i++) {
>             response.write(("Data stream line - " + i + "\n").getBytes());
>             response.flush();
>         }
>     };
>     return ResponseEntity.ok()
>             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=test_data.txt")
>             .contentType(MediaType.APPLICATION_OCTET_STREAM)
>             .body(responseBody);
> }
> ```
> ```
> @GetMapping("/csv")
> public ResponseEntity<StreamingResponseBody> getCsvFile() {
>     StreamingResponseBody stream = output -> {
>         Writer writer = new BufferedWriter(new OutputStreamWriter(output));
>         writer.write("name,rollNo"+"\n");
>         for (int i = 1; i <= 10000; i++) {
>             Student st = new Student("Name" + i, i);
>             writer.write(st.getName() + "," + st.getRollNo() + "\n");
>             writer.flush();
>         }
>     };
>     return ResponseEntity.ok()
>             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=data.csv")
>             .contentType(MediaType.TEXT_PLAIN)
>             .body(stream);
> }
> ```
# Streaming Zipped File - Examples

> [!expand-ui]- ResponseEntity<StreamingResponseBody>
> ```
> @GetMapping(value = "/zip")
> public ResponseEntity<StreamingResponseBody> getZipFileStream() {
>     StreamingResponseBody stream = output -> writeToStream(output);
>     return ResponseEntity.ok()
>             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=report.zip")
>             .contentType(MediaType.APPLICATION_OCTET_STREAM)
>             .body(stream);
> }
>
> private void writeToStream(OutputStream os) throws IOException {
>     ZipOutputStream zipOut = new ZipOutputStream(new BufferedOutputStream(os));
>     ZipEntry e = new ZipEntry("data.csv");
>     zipOut.putNextEntry(e);
>     Writer writer = new BufferedWriter(new OutputStreamWriter(zipOut, Charset.forName("UTF-8").newEncoder()));
>     for (int i = 1; i <= 1000; i++) {
>         Student st = new Student("Name" + i, i);
>         writer.write(st.getName() + "," + st.getRollNo() + "\n");
>         writer.flush();
>     }
>     if (writer != null) {
>         try {
>             writer.flush();
>             writer.close();
>         } catch (IOException e1) {
>             e1.printStackTrace();
>         }
>     }
> }
> ```
# Streaming audio/video - Examples

> [!expand-ui]- Mono<ResponseEntity<byte[]>>
> ```
> @RestController
> @RequestMapping("/audiovideo")
> public class AudioVideoController {
>     public static final String VIDEO_PATH = "/static/videos";
>     public static final String AUDIO_PATH = "/static/audios";
>     public static final int BYTE_RANGE = 128; // increase the byterange from here
>     @GetMapping("/videos/{fileName}")
>     public Mono<ResponseEntity<byte[]>> streamVideo(@RequestHeader(value = "Range", required = false) String httpRangeList,
>                                                     @PathVariable("fileName") String fileName) {
>         return Mono.just(getContent(VIDEO_PATH, fileName, httpRangeList, "video"));
>     }
>     @GetMapping("/audios/{fileName}")
>     public Mono<ResponseEntity<byte[]>> streamAudio(@RequestHeader(value = "Range", required = false) String httpRangeList,
>                                                     @PathVariable("fileName") String fileName) {
>         return Mono.just(getContent(AUDIO_PATH, fileName, httpRangeList, "audio"));
>     }
>     private ResponseEntity<byte[]> getContent(String location, String fileName, String range, String contentTypePrefix) {
>         long rangeStart = 0;
>         long rangeEnd;
>         byte[] data;
>         Long fileSize;
>         String fileType = fileName.substring(fileName.lastIndexOf(".")+1);
>         try {
>             fileSize = Optional.ofNullable(fileName)
>                     .map(file -> Paths.get(getFilePath(location), file))
>                     .map(this::sizeFromFile)
>                     .orElse(0L);
>             if (range == null) {
>                 return ResponseEntity.status(HttpStatus.OK)
>                         .header("Content-Type", contentTypePrefix+"/" + fileType)
>                         .header("Content-Length", String.valueOf(fileSize))
>                         .body(readByteRange(location, fileName, rangeStart, fileSize - 1));
>             }
>             String[] ranges = range.split("-");
>             rangeStart = Long.parseLong(ranges[0].substring(6));
>             if (ranges.length > 1) {
>                 rangeEnd = Long.parseLong(ranges[1]);
>             } else {
>                 rangeEnd = fileSize - 1;
>             }
>             if (fileSize < rangeEnd) {
>                 rangeEnd = fileSize - 1;
>             }
>             data = readByteRange(location, fileName, rangeStart, rangeEnd);
>         } catch (IOException e) {
>             e.printStackTrace();
>             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
>         }
>         String contentLength = String.valueOf((rangeEnd - rangeStart) + 1);
>         return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
>                 .header("Content-Type", contentTypePrefix
>                         "/" + fileType)
>                 .header("Accept-Ranges", "bytes")
>                 .header("Content-Length", contentLength)
>                 .header("Content-Range", "bytes" + " " + rangeStart + "-" + rangeEnd + "/" + fileSize)
>                 .body(data);
>     }
>     public byte[] readByteRange(String location, String filename, long start, long end) throws IOException {
>         Path path = Paths.get(getFilePath(location), filename);
>         try (InputStream inputStream = (Files.newInputStream(path));
>              ByteArrayOutputStream bufferedOutputStream = new ByteArrayOutputStream()) {
>             byte[] data = new byte[BYTE_RANGE];
>             int nRead;
>             while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
>                 bufferedOutputStream.write(data, 0, nRead);
>             }
>             bufferedOutputStream.flush();
>             byte[] result = new byte[(int) (end - start) + 1];
>             System.arraycopy(bufferedOutputStream.toByteArray(), (int) start, result, 0, result.length);
>             return result;
>         }
>     }
>     private String getFilePath(String location) {
>         URL url = this.getClass().getResource(location);
>         return new File(url.getFile()).getAbsolutePath();
>     }
>     private Long sizeFromFile(Path path) {
>         try {
>             return Files.size(path);
>         } catch (IOException ex) {
>             ex.printStackTrace();
>         }
>         return 0L;
>     }
> }
> ```
# Other
- [[Java - Spring - Stream Download File Large Amount of Data From Database]]
