<?php
defined('BASEPATH') or exit('No direct script access allowed');

// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

header('Content-type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

// header('Access-Control-Allow-Origin: https://mi-linux.wlv.ac.uk/~2004138/electronic/public/', false);

require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

//use Illuminate\Http\Request;

class Electronic extends REST_Controller
{

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function __construct()
    {
       parent::__construct();
//        $this->config->set_item('csrf_protection', false);
       $this->load->database();
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_get($id = 0)
    {
        if (!empty($id)) {
            $data = $this->db->get_where("electronics", ['id' => $id])->row_array();
        } else {
            $data = $this->db->order_by('title', 'ASC')->get("electronics")->result();
        }

        $this->response($data, REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $this->db->insert('electronics', $data);

        $this->response(['Product created successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_put($id)
    {
        $input = $this->put();
        $this->db->update('electronics', $input, array('id' => $id));

        $this->response(['Product updated successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_delete($id)
    {
        $this->db->delete('electronics', array('id' => $id));

        $this->response(['Product deleted successfully.'], REST_Controller::HTTP_OK);
    }

}
