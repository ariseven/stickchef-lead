<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\Exception;
use Illuminate\Support\Facades\Log;
use function Psy\debug;

class LeadController extends Controller
{

    public function store(Request $request)
    {
        $client = new Client([
            'base_uri' => 'https://demo.desk4.net/rest/v1/session/webtoken',
            'timeout'  => 2.0,
        ]);

        $response = $client->post('https://demo.desk4.net/rest/v1/session/webtoken',
            [
                'headers' => [
                    'accept' => 'application/json',
                    'Content-Type' => 'application/json'
                ],
                'body' => '{
                              "userName": "demoapi",
                              "password": "Meine-neue-Warenwirtschaft-2023!",
                              "branchID": 1,
                              "killExistingSession": true,
                              "userDevice": "device1"
                            }'
            ]
        );

        if ($response->getStatusCode() != 200) {
            return 'geht nicht';
        }

        $data = json_decode($response->getBody(), true);
        $token = $data['result'];
        $adress = $request->all();
        $adress['mainAddress']['address'] = $adress['mainAddress'];

        return $this->postCustomer($token,json_encode($adress));
    }

    public function postCustomer($token, $body) {

        Log::error($body);
        try {
            $client = new Client();
            Log::error('xxxx1');
            $response = $client->post('https://demo.desk4.net/rest/v1/customer/createorupdate', [
                'headers' => [
                    'accept' => 'application/json',
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer '.$token,
                ],
                'body' => '['.$body.']'
            ]);

            Log::error('$response'. $response->getStatusCode());


            return true;
        } catch (ClientException $e) {

            // Catch all 4XX errors
            dd($e);

            // To catch exactly error 400 use
            Log::error('RequestException');

            // You can check for whatever error status code you need

        }

    }


    public function getCustomer($token) {
        $client = new Client();
        $response = $client->get('https://demo.desk4.net/rest/v1/customer', [
            'headers' => [
                'accept' => 'application/json',
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer '.$token
            ],
        ]);

        if ($response->getStatusCode() != 200) {
            return false;
        }
        $data = json_decode($response->getBody(), true);
        return $data;
    }

    public function logoutWebtoken() {
        $client = new Client();
        $response = $client->delete('https://demo.desk4.net/rest/v1/session/logout_webtoken', [
            'headers' => [
                'accept' => 'application/json',
                'Content-Type' => 'application/json',
            ],
        ]);

        if ($response->getStatusCode() != 200) {
            return false;
        }
        return true;
    }

}
