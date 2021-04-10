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

import rva.jpa.Igrac;
import rva.repository.IgracRepository;

@RestController
public class IgracResController {
	
	@Autowired
	private IgracRepository igracRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("igrac")
	public Collection<Igrac> getIgraci()
	{
		return igracRepository.findAll();
	}
	
	@GetMapping("igrac/{id}")
	public Igrac getIgrac(@PathVariable("id") Integer id)
	{
		return igracRepository.getOne(id);
	}
	
	@GetMapping("igracIme/{ime}")
	public Collection<Igrac> getIgracByNaziv(@PathVariable("ime") String ime)
	{
		return igracRepository.findByImeContainingIgnoreCase(ime);
	}
	
	@PostMapping("igrac")
	public ResponseEntity<Igrac> insertIgrac(@RequestBody Igrac igrac) {
		if(!igracRepository.existsById(igrac.getId()))
		{
			igracRepository.save(igrac);
			return new ResponseEntity<Igrac>(HttpStatus.OK);
		}
			return new ResponseEntity<Igrac>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("igrac")
	public ResponseEntity<Igrac> updateIgrac(@RequestBody Igrac igrac)
	{
		if(!igracRepository.existsById(igrac.getId()))
		{
			return new ResponseEntity<Igrac>(HttpStatus.CONFLICT);
		}
		igracRepository.save(igrac);
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	}

	
	@DeleteMapping("igrac/{id}")
	public ResponseEntity<Igrac> deleteIgrac(@PathVariable Integer id) 
	{
		if(!igracRepository.existsById(id))
		{
			return new ResponseEntity<Igrac>(HttpStatus.NO_CONTENT);
		}
		igracRepository.deleteById(id);
		if(id == -100)
		{
			jdbcTemplate.execute("INSERT INTO \"igrac\" (\"id\",\"ime\",\"prezime\",\"broj_reg\",\"datum_rodjenja\",\"nacionalnost\",\"tim\")"
					+ "VALUES(-100,'Ime test', 'Prezime test', '1782',to_date('23.10.1987.','dd.mm.yyyy.'), -100, -100) ");
		}
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	}

}
