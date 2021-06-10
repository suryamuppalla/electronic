<?php
defined('BASEPATH') or exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");

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
//         header("Access-Control-Allow-Origin: *");
//         header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//         header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
//         header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');
//         header("Access-Control-Allow-Headers: X-Requested-With");
//         if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//             if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
//                 header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//             if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
//                 header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
//                 exit(0);
//         }
// if ( "OPTIONS" === $_SERVER['REQUEST_METHOD'] ) {
//     die();
// }
        parent::__construct();
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
        if ($this->db->where('id', $data['id'])) {
            $this->db->update('electronics', $data);
            $this->response(['Product Updated successfully.'], REST_Controller::HTTP_OK);
        } else {
            $this->db->insert('electronics', $data);
            $this->response(['Product created successfully.'], REST_Controller::HTTP_OK);
        }
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_put($id)
    {
//         $input = $this->put();
//         $this->db->update('electronics', $input, array('id' => $id));
//
//         $this->response(['Product updated successfully.'], REST_Controller::HTTP_OK);
        header('Access-Control-Allow-Origin: *');
        $this->db->where('id', $id);
        $this->db->update('electronics', $this->put());
        echo 'order has successfully been updated';
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
