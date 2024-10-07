package wor.wor;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class MappingController {


    @GetMapping("/")
    public String index() {
        return "index";
    }

   

    @GetMapping("/about")
    public String about() {
        return "about";
    }


    @GetMapping("/contact")
    public String contact() {
        return "contactus";
    }



    @GetMapping("/contactform")
    public String contactform() {
        return "contactform";
    }


    @GetMapping("/email")
    public String email() {
        return "email";
    }


    @GetMapping("/empowerment")
    public String empowerment() {
        return "Empowerment";
    }

    @GetMapping("/faq")
    public String faq() {
        return "Faq";
    }

    @GetMapping("/journey")
    public String journey() {
        return "Journey";
    }

    @GetMapping("/ourmission")
    public String ourmission() {
        return "ourmission";
    }

    @GetMapping("/ourvision")
    public String ourvision() {
        return "ourvision";
    }

    @GetMapping("/privacypolicy")
    public String privacypolicy() {
        return "privacy-policy";
    }

    @GetMapping("/termsandconditions")
    public String termsandconditions() {
        return "terms-and-conditions";
    }


    @GetMapping("/whywomenrider")
    public String whywomenrider() {
        return "whywomen";
    }

    @GetMapping("/about-ceo")
    public String aboutceo() {
        return "MD";
    }

	/*
	 * @GetMapping("/mailing") public String sendingMail() { return "sendmymail"; }
	 */
    

	/*
	 * @PostMapping("/postmail") public String postMail(@RequestParam String
	 * name, @RequestParam String email ) { // Call the EmailSender with the
	 * provided details EmailSender.sendEmail(name, email); return "redirect:/"; //
	 * Redirect to the home page or another page after sending }
	 */
    

}
