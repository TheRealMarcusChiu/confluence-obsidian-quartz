---
title: "Java - Spring - Stream Download File Large Amount of Data From Database"
created: 2022-12-19T15:14:18.678-06:00
modified: 2022-12-19T15:28:28.347-06:00
parent: "[[Java - Spring _Examples]]"
children: []
---
# Code Setup
```
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Stream<User> streamAll();
}
```
```
@Service
@RequiredArgsConstructor
public class ToOutputStreamService {

	private final UserRepository userRepository;
	private final EntityManager entityManager;

	@Transactional(readOnly = true)
	public void writeToStream(final OutputStream os) throws IOException {
		entityManager.joinTransaction();
		final Stream<User> userStream = userRepository.streamAll();

		try (Writer writer = new BufferedWriter(new OutputStreamWriter(os))) {
			AtomicInteger counter = new AtomicCounter();
			userStream.forEach(user -> {
				try {
					writer.write(user.toString() + "\n");

					int i = counter.incrementAndGet();
					if (i % 100 == 0) {
						entityManager.flush();
						entityManager.clear(); // clear persistence context entity cache
					}
				} catch (Exception e) {
					throw new RuntimeException(e);
				}
			});
		}
	}
}
```
```
@RestContoller
@RequestMapping("/api")
@RequiredArgsContructor
public class ExampleController {

	private final ToOutputStreamService toOutputStreamService;

	@GetMapping("/download")
	public ResponseEntity<StreamingResponseBody> downloadFile() {
		StreamingResponseBody stream = os -> toOutputStreamService.writeToStream(os);
		return ResponseEntity.ok()
			.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=data.txt")
			.contentType(MediaType.APPLICATION_OCTET_STREAM)
			.body(stream);
	}
}
```
```
spring:
  mvc:
    async:
      request-timeout: 3600000 # increase timeout otherwise (only part of the file will be transferred to client)
```
# Test

open the browser to [http://localhost:8080/api/download](http://localhost:8080/api/download)
