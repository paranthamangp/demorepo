public class EmployeeJsonToApex {
 
    public List<Data> data;

	public class Data {
		public String id;
		public String employee_name;
		public String employee_salary;
		public String employee_age;
		public String profile_image;
	}

	
	public static EmployeeJsonToApex parse(String json) {
		return (EmployeeJsonToApex) System.JSON.deserialize(json, EmployeeJsonToApex.class);
	}
}