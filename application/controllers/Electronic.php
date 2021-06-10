<?php
defined('BASEPATH') or exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");


//use Illuminate\Http\Request;

class Electronic extends CI_Controller
{

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function __construct()
    {
        if ( "OPTIONS" === $_SERVER['REQUEST_METHOD'] ) {
            die();
        }
        parent::__construct();
        $this->load->database();
        $this->load->helper('url_helper');
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function update_data()
    {
//         $input = $this->put();
//         $this->db->update('electronics', $input, array('id' => $id));
//
//         $this->response(['Product updated successfully.'], REST_Controller::HTTP_OK);
//         header('Access-Control-Allow-Origin: *');
        $data = json_decode(file_get_contents('php://input'), true);
        echo $data;
        $this->db->where('id', $id);
        echo $id;
        $this->db->update('electronics', $this->put());
        echo 'order has successfully been updated';
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function delete($id)
    {
        $this->db->delete('electronics', array('id' => $id));

        $this->response(['Product deleted successfully.'], REST_Controller::HTTP_OK);
    }

}
