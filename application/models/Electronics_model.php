<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Electronics_model extends CI_Model
{

    public $table = 'electronics';

    function get($id = false)
    {
        $this->load->database();
        // Select record
        /*$this->db->select('*');
        $q = $this->db->get('electronics');
        $response = $q->result_array();

        return $response;*/

        if ($id === false) {
            $electronics = $this->db->get('electronics');
            return $electronics->result_array();
        }

        $data = $this->db->where('id', $id)->get($this->table);
        return $data ? $data->row_array() : false;
    }

    function insert($data)
    {
        $this->load->database();
        $insert = $this->db->insert($this->table, $data);
        return $insert ? $this->db->insert_id() : false;
    }

    function update($data, $id)
    {
        $this->load->database();
        $update = $this->db->update($this->table, $data, array('id' => $id));
        return $update ? true : false;
    }
}
