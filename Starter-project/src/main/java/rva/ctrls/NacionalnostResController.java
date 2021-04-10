package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Nacionalnost;
import rva.repository.NacionalnostRepository;

@RestController
public class NacionalnostResController {
	
	@Autowired
	private NacionalnostRepository nacionalnostRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("nacionalnost")
	public Collection<Nacionalnost> getNacionalnosti()
	{
		return nacionalnostRepository.findAll();
	}

	@GetMapping("nacionalnost/{id}")
	public Nacionalnost getNacionalnost(@PathVariable("id") Integer id)
	{
		return nacionalnostRepository.getOne(id);
	}
	
	@GetMapping("nacionalnostNaziv/{naziv}")
	public Collection<Nacionalnost> getDobavljacByNaziv(@PathVariable("naziv") String naziv)
	{
		return nacionalnostRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("nacionalnost")
	public ResponseEntity<Nacionalnost> insertNacionalnost(@RequestBody Nacionalnost nacionalnost)
	{
		if(!nacionalnostRepository.existsById(nacionalnost.getId()))
		{
			nacionalnostRepository.save(nacionalnost);
			return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Nacionalnost>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("nacionalnost")
	public ResponseEntity<Nacionalnost> updateNacionalnost(@RequestBody Nacionalnost nacionalnost)
	{
		if(!nacionalnostRepository.existsById(nacionalnost.getId()))
		{
			return new ResponseEntity<Nacionalnost>(HttpStatus.NO_CONTENT);
		}
		nacionalnostRepository.save(nacionalnost);
		return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
	}
	
	@DeleteMapping("nacionalnost/{id}")
	public ResponseEntity<Nacionalnost> deleteNacionalnost(@PathVariable Integer id)
	{
		if(!nacionalnostRepository.existsById(id))
		{
			return new ResponseEntity<Nacionalnost>(HttpStatus.NO_CONTENT);
		}
		nacionalnostRepository.deleteById(id);
		if(id == -100)
		jdbcTemplate.execute("INSERT INTO \"nacionalnost\" (\"id\",\"naziv\",\"skracenica\")"
				+ "VALUES (-100,'Naziv Test','skr')");
		return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
	}
	
}
